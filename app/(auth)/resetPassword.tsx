import React, { useState } from "react";
import { supabase } from "@/utils/supabase/supabase";
import { Alert, View } from "react-native";
import { useRouter } from "expo-router";
import { makeRedirectUri } from "expo-auth-session";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import * as Linking from "expo-linking";
import { useTheme } from "react-native-paper";

import ResetPassword from "@/src/screens/auth/resetPassword/ResetPassword";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
import LoadingModal from "@/src/modal/LoadingModal";
import { useLocale } from "@/src/hooks/useLocale";

const resetPassword = () => {
  const router = useRouter();
  const theme = useTheme();
  const locale = useLocale();

  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });
  const [disable, setDisable] = useState(false);

  const redirectTo = makeRedirectUri({ path: "resetPassword" });

  const backAction = () => {
    router.back();
  };
  const resetPassAction = async (formData: { email: string }) => {
    setLoading(true);
    let { data, error } = await supabase.auth.resetPasswordForEmail(
      formData.email,
      { redirectTo: redirectTo }
    );

    if (error) {
      setLoading(false);
      setErrVisible({ status: true, message: error.message });
      return;
    }

    setLoading(false);
    Alert.alert(locale.success, locale.checkEmail);
    setDisable(true);
  };

  const createSessionFromUrl = async (url: string) => {
    const { params, errorCode } = QueryParams.getQueryParams(url);

    if (errorCode) throw new Error(errorCode);
    const { access_token, refresh_token } = params;

    if (!access_token) return;

    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });
    if (error) throw error;
    router.push("/setNewPassword");
    // console.log("data >>", data);
    return data.session;
  };

  const url = Linking.useURL();
  if (url) createSessionFromUrl(url);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
      <ResetPassword
        backAction={backAction}
        resetPassAction={resetPassAction}
        disable={disable}
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
