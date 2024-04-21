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
import { changeUserPassword } from "@/domain/auth/change_password";
import { useStore } from "@/src/store/store";
import { supabase } from "@/utils/supabase/supabase";
import SetNewPassword from "@/src/screens/auth/setNewPassword/SetNewPassword";

const resetPassword = () => {
  const locale = useLocale();
  const router = useRouter();
  const theme = useTheme();

  const { updateResetPass } = useStore();
  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  const resetPasswordAction = async (formData: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    updateResetPass(false);
    if (formData.newPassword !== formData.confirmPassword) {
      setErrVisible({ status: true, message: locale.passwordNotMatch });
      return;
    }
    setLoading(true);

    supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(event, session);
      if (event == "PASSWORD_RECOVERY") {
      }
    });

    setLoading(false);

    const { data, error } = await changeUserPassword(
      "htoomyat.20399@gmail.com",
      formData.newPassword
    );

    if (error) {
      setErrVisible({ status: true, message: error.message });
      setLoading(false);
      return;
    }

    router.replace("/signIn");
    updateResetPass(false);
    setLoading(false);
    ToastAndroid.show(locale.resetPasswordSuccess, ToastAndroid.SHORT);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
        <SetNewPassword resetPasswordAction={resetPasswordAction} />

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
