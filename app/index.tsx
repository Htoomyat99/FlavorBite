import { View, Text, Alert } from "react-native";
import React, { useEffect } from "react";
import { Redirect, useRouter } from "expo-router";
import { useStore } from "@/src/store/store";
import { getCurrentSession } from "@/domain/auth/get_current_session";

const index = () => {
  const router = useRouter();

  const { userData, updateUserId } = useStore();

  useEffect(() => {
    currentSession();
  }, []);

  const currentSession = async () => {
    const { data, error } = await getCurrentSession();

    if (error) {
      Alert.alert(error.name, error.message);
      router.push("/signIn");
      return;
    }

    if (data.session === null) {
      router.push("/signIn");
      return;
    }

    router.push("/(tabs)");
    updateUserId(data.session.user.id);
    console.log("session >>>", data.session.user.id);
  };

  return <></>;
};

export default index;
