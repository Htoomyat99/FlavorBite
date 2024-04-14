import { View, Text, Alert } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { signUpWithEmail } from "@/domain/auth/sign_up_with_email";
import { useStore } from "@/src/store/store";

const register = () => {
  const router = useRouter();

  const { updateUserId } = useStore();

  const signUpAction = async () => {
    const { data, error } = await signUpWithEmail(
      "htoomyat@gmail.com",
      "000000"
    );

    if (error) {
      Alert.alert(error.name, `${(error.message, error.code, error.name)}`);
      return;
    }

    console.log("singUpdata >>>", data.user?.id);
    updateUserId(data?.user?.id);
    router.replace("/(tabs)");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={signUpAction} style={{ marginBottom: 50 }}>
        Sign Up Button
      </Text>

      <Text onPress={() => router.push("/signIn")}>Go Sign In</Text>
    </View>
  );
};

export default register;
