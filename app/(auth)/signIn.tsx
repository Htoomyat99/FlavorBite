import { View, Text, Alert } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { signInWithEmail } from "@/domain/auth/sign_in_with_email";
import { useStore } from "@/src/store/store";

const login = () => {
  const router = useRouter();

  const { updateUserId } = useStore();

  const signInAction = async () => {
    const { data, error } = await signInWithEmail(
      "htoomyat@gmail.com",
      "000000"
    );

    if (error) {
      Alert.alert(error.name, error.code);
      return;
    }

    router.replace("/(tabs)");
    updateUserId(data?.user.id);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={signInAction} style={{ marginBottom: 50 }}>
        Sign In Button
      </Text>

      <Text onPress={() => router.push("/signUp")}>Go Sign Up</Text>
    </View>
  );
};

export default login;
