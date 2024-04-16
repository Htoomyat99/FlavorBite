import { Alert } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { signInWithEmail } from "@/domain/auth/sign_in_with_email";
import { useStore } from "@/src/store/store";
import SignInScreen from "@/src/screens/auth/signIn/SignInScreen";

const login = () => {
  const router = useRouter();

  const { updateUserId } = useStore();
  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  const goSignUpAction = () => {
    router.push("/signUp");
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

    router.replace("/(tabs)");
    updateUserId(data?.user.id);
    setLoading(false);
  };

  const forgotPassAction = () => {};

  const signInWithGoogleAction = () => {};

  return (
    <SignInScreen
      goSignUpAction={goSignUpAction}
      signInAction={signInAction}
      forgotPassAction={forgotPassAction}
      signInWithGoogleAction={signInWithGoogleAction}
      loading={loading}
      errVisible={errVisible}
      hideModal={() => setErrVisible({ status: false, message: "" })}
    />
  );
};

export default login;
