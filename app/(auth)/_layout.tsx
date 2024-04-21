import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="signIn" />
      <Stack.Screen name="signUp" />
      <Stack.Screen name="resetPassword" />
      <Stack.Screen name="setNewPassword" />
      <Stack.Screen name="userRegister" />
    </Stack>
  );
};

export default _layout;
