import { StyleSheet, View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useLocale } from "@/src/hooks/useLocale";
import { useTheme, Text } from "react-native-paper";
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
