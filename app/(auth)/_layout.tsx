import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="signUp" />
      <Stack.Screen name="resetPassword" />
      <Stack.Screen name="setNewPassword" />
      <Stack.Screen name="userRegister" />
    </Stack>
  );
};

export default AuthLayout;
