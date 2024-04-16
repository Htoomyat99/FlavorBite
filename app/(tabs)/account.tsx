import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import useInternetConnection from "@/src/hooks/useInternetLocation";
import { useStore } from "@/src/store/store";
import { insertUserData } from "@/domain/auth/insert_user_data";
import LanguageModal from "@/src/modal/LanguageModal";
import { signOutWithEmail } from "@/domain/auth/sign_out_with_email";
import { useRouter } from "expo-router";

const account = () => {
  const router = useRouter();
  const theme = useTheme();
  const net = useInternetConnection();
  const { updateUserId, userId } = useStore();
  const [visible, setVisible] = useState(false);

  const signOutAction = async () => {
    const { error } = await signOutWithEmail();
    if (error) {
      Alert.alert(error.name, error.message);
      return;
    }

    router.replace("/signIn");
    updateUserId(null);
    console.log("data >>>", error);
  };

  const updateUserAction = async () => {
    let updateData = {
      id: userId,
      user_name: "htoo myat",
      phone: "09769706139",
      address: "North Dagon, Yangon",
      photo:
        "https://static.vecteezy.com/system/resources/previews/024/500/725/non_2x/panda-bamboo-ai-generative-free-png.png",
    };
    const { data, error } = await insertUserData(updateData);

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    console.log("updateData >>", data);
  };

  const openLangModal = () => {
    setVisible(true);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>index</Text>

      <Text onPress={openLangModal}>Lang</Text>

      <Text onPress={updateUserAction} style={{ marginVertical: 20 }}>
        Update User
      </Text>

      <Text onPress={signOutAction}>Sign Out</Text>

      <LanguageModal visible={visible} hideModal={() => setVisible(false)} />
    </View>
  );
};

export default account;
