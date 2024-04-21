import { TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";
import styles from "./style";

const EmptyProduct = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}
    >
      <AnimatedLottieView
        loop
        autoPlay
        source={require("@/assets/animations/noDataFound.json")}
        style={styles.lottie}
      />
    </TouchableWithoutFeedback>
  );
};

export default EmptyProduct;
