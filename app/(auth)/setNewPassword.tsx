import {
  View,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useTheme } from "react-native-paper";

import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
import LoadingModal from "@/src/modal/LoadingModal";
import { useLocale } from "@/src/hooks/useLocale";
import { useStore } from "@/src/store/store";
import SetNewPassword from "@/src/screens/auth/setNewPassword/SetNewPassword";
import { updateUserInfo } from "@/domain/auth/change_password";

const resetPassword = () => {
  const locale = useLocale();
  const router = useRouter();
  const theme = useTheme();

  const { updateResetPass } = useStore();
  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  const setNewPassAction = async (formData: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    updateResetPass(false);
    if (formData.newPassword !== formData.confirmPassword) {
      setErrVisible({ status: true, message: locale.passwordNotMatch });
      return;
    }

    setLoading(true);
    const { data, error } = await updateUserInfo(formData.newPassword);

    if (error) {
      setErrVisible({ status: true, message: error.message });
      setLoading(false);
      return;
    }

    setLoading(false);
    ToastAndroid.show(locale.resetPasswordSuccess, ToastAndroid.SHORT);
    router.push("/home/");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
        <SetNewPassword setNewPassAction={setNewPassAction} />

        <ErrorAlertModal
          errVisible={errVisible}
          hideModal={() => setErrVisible({ status: false, message: "" })}
        />

        {loading && <LoadingModal />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default resetPassword;
