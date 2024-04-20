import {
  View,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import ChangePassword from "@/src/screens/dashboard/changePassword/ChangePassword";
import { useRouter } from "expo-router";
import LoadingModal from "@/src/modal/LoadingModal";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
import { changeUserPassword } from "@/domain/auth/change_password";
import { useLocale } from "@/src/hooks/useLocale";
import { useTheme } from "react-native-paper";

const changePassword = () => {
  const router = useRouter();
  const locale = useLocale();
  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  const backAction = () => {
    router.back();
  };

  const changePasswordAction = async (formData: passType) => {
    if (formData.newPassword !== formData.confirmPassword) {
      setErrVisible({
        status: true,
        message: locale.newPassAndConfirmPassNotMatch,
      });
      return;
    }

    setLoading(true);
    const { data, error } = await changeUserPassword(
      formData.currentPassword,
      formData.newPassword
    );

    if (error) {
      setErrVisible({ status: true, message: error.message });
      setLoading(false);
      return;
    }

    setLoading(false);
    ToastAndroid.show(locale.passChangeSuccess, ToastAndroid.SHORT);
    router.back();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <ChangePassword
          backAction={backAction}
          changePasswordAction={changePasswordAction}
        />

        <ErrorAlertModal
          errVisible={errVisible}
          hideModal={() => setErrVisible({ status: false, message: "" })}
        />

        {loading && <LoadingModal />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default changePassword;
