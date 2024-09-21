import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useTheme } from "react-native-paper";

import ChangePassword from "@/src/screens/dashboard/changePassword/ChangePassword";
import LoadingModal from "@/src/modal/LoadingModal";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
// import { changeUserPassword } from "@/domain/auth/change_password";
import { useLocale } from "@/src/hooks/useLocale";

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
    // const { data, error } = await changeUserPassword(formData.newPassword);

    // if (error) {
    //   setErrVisible({ status: true, message: error.message });
    //   setLoading(false);
    //   return;
    // }

    setLoading(false);
    ToastAndroid.show(locale.passChangeSuccess, ToastAndroid.SHORT);
    router.back();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
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
