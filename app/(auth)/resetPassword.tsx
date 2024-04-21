import React, { useState } from "react";
import { supabase } from "@/utils/supabase/supabase";
import { View } from "react-native";
import { useRouter } from "expo-router";

import ResetPassword from "@/src/screens/auth/resetPassword/ResetPassword";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
import LoadingModal from "@/src/modal/LoadingModal";
import { useStore } from "@/src/store/store";
import { useTheme } from "react-native-paper";

const resetPassword = () => {
  const router = useRouter();
  const theme = useTheme();

  const { updateResetPass } = useStore();
  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  const backAction = () => {
    router.back();
  };
  const forgotPassAction = async (formData: { email: string }) => {
    setLoading(true);
    let { data, error } = await supabase.auth.resetPasswordForEmail(
      "htoomyat.20399@gmail.com"
    );

    if (error) {
      setLoading(false);
      setErrVisible({ status: true, message: error.message });
      return;
    }

    setLoading(false);
    updateResetPass(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
      <ResetPassword
        backAction={backAction}
        forgotPassAction={forgotPassAction}
      />

      <ErrorAlertModal
        errVisible={errVisible}
        hideModal={() => setErrVisible({ status: false, message: "" })}
      />

      {loading && <LoadingModal />}
    </View>
  );
};

export default resetPassword;
