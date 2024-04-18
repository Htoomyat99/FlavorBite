import { View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";
import styles from "./style";
import { useLocale } from "@/src/hooks/useLocale";
import { useTheme, Text } from "react-native-paper";

const OrderEmpty = () => {
  const locale = useLocale();
  const theme = useTheme();
  return (
    <View style={styles.emptyContainer}>
      <AnimatedLottieView
        loop
        autoPlay
        source={require("@/assets/animations/emptyCart.json")}
        style={styles.lottie}
      />

      <Text style={styles.emptyText}>{locale.orderEmpty}</Text>
    </View>
  );
};

export default OrderEmpty;
