import React, { useState } from "react";
import { useRouter } from "expo-router";
import { signUpWithEmail } from "@/domain/auth/sign_up_with_email";
import { useStore } from "@/src/store/store";
import SignUpScreen from "@/src/screens/auth/signUp/SignUpScreen";

const signUp = () => {
  const router = useRouter();

  const { updateUserId } = useStore();
  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  const goSignInAction = () => {
    router.push("/signIn");
  };

  const signInWithGoogleAction = () => {};

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
    router.replace("/(tabs)/home");
  };

  return (
    <SignUpScreen
      goSignInAction={goSignInAction}
      signUpAction={signUpAction}
      signInWithGoogleAction={signInWithGoogleAction}
      loading={loading}
      errVisible={errVisible}
      hideModal={() => setErrVisible({ status: false, message: "" })}
    />
  );
};

export default signUp;
