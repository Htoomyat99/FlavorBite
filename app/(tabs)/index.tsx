import { View, Text, Alert } from "react-native";
import React, { useEffect } from "react";
import { signOutWithEmail } from "@/domain/auth/sign_out_with_email";
import { router } from "expo-router";
import { useStore } from "@/src/store/store";
import { getSaleItems } from "@/domain/dashboard/get_sale_items";
import { insertUserData } from "@/domain/auth/insert_user_data";

const index = () => {
  const { updateUserId, userId } = useStore();

  useEffect(() => {
    fetchSaleItems();
  }, []);

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

  const fetchSaleItems = async () => {
    const { data, error } = await getSaleItems();

    if (error) {
      Alert.alert("Error", error.message);
      return;
    }

    console.log(JSON.stringify(data));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>index</Text>

      <Text onPress={updateUserAction} style={{ marginVertical: 20 }}>
        Update User
      </Text>

      <Text onPress={signOutAction}>Sign Out</Text>
    </View>
  );
};

export default index;
