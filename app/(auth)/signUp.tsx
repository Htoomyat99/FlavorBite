import React from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

import { signUpWithEmail } from "@/domain/auth/sign_up_with_email";
import { useStore } from "@/src/store/store";
import SignUpScreen from "@/src/screens/auth/signUp/SignUpScreen";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
import LoadingModal from "@/src/modal/LoadingModal";
import useGoogleSignIn from "@/src/hooks/useGoogleSignIn";

const signUp = () => {
  const router = useRouter();
  const theme = useTheme();

  const { signInWithGoogle, errVisible, setErrVisible, loading, setLoading } =
    useGoogleSignIn();

  const { updateUserId } = useStore();

  const goSignInAction = () => {
    router.push("/signIn");
  };

  const signUpAction = async (formData: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    if (formData.password !== formData.confirmPassword) {
      setErrVisible({ status: true, message: "Passwords do not match" });
      return;
    }

    setLoading(true);
    const { data, error } = await signUpWithEmail(
      formData.email,
      formData.password
    );

    if (error) {
      setErrVisible({ status: true, message: error.message });
      setLoading(false);
      return;
    }

    setLoading(false);
    updateUserId(data?.user?.id);
    router.push({
      pathname: "/userRegister",
      params: { email: data?.user?.email as string },
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
      <SignUpScreen
        goSignInAction={goSignInAction}
        signUpAction={signUpAction}
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

export default signUp;
