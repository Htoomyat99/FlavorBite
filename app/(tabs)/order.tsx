import { View, Text } from "react-native";
import React from "react";
import { useStore } from "@/src/store/store";

const order = () => {
  const { cartItem } = useStore();

  console.log(cartItem);
  return (
    <View>
      <Text>order</Text>
    </View>
  );
};

export default order;
