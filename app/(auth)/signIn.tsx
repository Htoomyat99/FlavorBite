import React from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

import { signInWithEmail } from "@/domain/auth/sign_in_with_email";
import { useStore } from "@/src/store/store";
import SignInScreen from "@/src/screens/auth/signIn/SignInScreen";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
import LoadingModal from "@/src/modal/LoadingModal";
import useGoogleSignIn from "@/src/hooks/useGoogleSignIn";

const login = () => {
  const router = useRouter();
  const theme = useTheme();

  const { signInWithGoogle, errVisible, setErrVisible, loading, setLoading } =
    useGoogleSignIn();

  const { updateUserId } = useStore();

  const goSignUpAction = () => {
    router.push("/signUp");
  };

  const forgotPassAction = () => {
    // router.push("/resetPassword");
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
        signInWithGoogleAction={signInWithGoogle}
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
