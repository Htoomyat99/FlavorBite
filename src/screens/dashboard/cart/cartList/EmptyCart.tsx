import { View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { Text } from "react-native-paper";

import { useLocale } from "@/src/hooks/useLocale";
import styles from "./style";

const EmptyCart = () => {
  const locale = useLocale();

  return (
    <View style={styles.emptyContainer}>
      <AnimatedLottieView
        loop
        autoPlay
        source={require("@/assets/animations/emptyCart.json")}
        style={styles.lottie}
      />

      <Text style={styles.text}>{locale.noCartItemFound}</Text>
    </View>
  );
};

export default EmptyCart;
