import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { Alert, useColorScheme } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { Colors } from "@/constants/Colors";
import { getCurrentSession } from "@/domain/auth/get_current_session";
import { useStore } from "@/src/store/store";

const _layout = () => {
  const colorTheme = useColorScheme();
  const router = useRouter();

  const { updateUserId, isDarkMode, resetPass } = useStore();

  useEffect(() => {
    currentSession();
    // router.replace("/(auth)");
  }, []);

  const currentSession = async () => {
    const { data, error } = await getCurrentSession();
    if (error) {
      Alert.alert(error.name, error.message);
      router.replace("/(auth)");
      return;
    }

    if (data.session === null) {
      router.replace("/(auth)");
      return;
    }

    router.replace("/(tabs)/home");
    updateUserId(data.session.user.id);
  };

  const DarkTheme = {
    ...MD3DarkTheme,
    Colors: Colors.light,
  };

  const LightTheme = {
    ...MD3LightTheme,
    Colors: Colors.dark,
  };

  const theme = colorTheme === "dark" || isDarkMode ? DarkTheme : LightTheme;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(tabs)" />
          </Stack>
        </BottomSheetModalProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default _layout;
