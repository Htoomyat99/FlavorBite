import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

import { signInWithEmail } from "@/domain/auth/sign_in_with_email";
import { useStore } from "@/src/store/store";
import SignInScreen from "@/src/screens/auth/signIn/SignInScreen";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
import LoadingModal from "@/src/modal/LoadingModal";

const login = () => {
  const router = useRouter();
  const theme = useTheme();

  const { updateUserId } = useStore();
  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  const goSignUpAction = () => {
    router.push("/signUp");
  };

  const forgotPassAction = () => {
    router.push("/resetPassword");
  };

  const signInWithGoogleAction = () => {
    setErrVisible({ status: true, message: "Not implemented yet" });
  };

  const signInAction = async (userData: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    const { data, error } = await signInWithEmail(
      userData.email,
      userData.password
    );

    if (error) {
      setErrVisible({ status: true, message: error.message });
      setLoading(false);
      return;
    }

    router.replace("/(tabs)/home");
    updateUserId(data?.user.id);
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
      <SignInScreen
        goSignUpAction={goSignUpAction}
        signInAction={signInAction}
        forgotPassAction={forgotPassAction}
        signInWithGoogleAction={signInWithGoogleAction}
      />

      <ErrorAlertModal
        errVisible={errVisible}
        hideModal={() => setErrVisible({ status: false, message: "" })}
      />

      {loading && <LoadingModal />}
    </View>
  );
};

export default login;
