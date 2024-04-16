import { View, Text, Modal } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

import styles from "./style";

const LoadingView = () => {
  return (
    <Modal transparent={true} visible={true} animationType="fade">
      <View style={styles.indicatorContainer}>
        <View style={styles.content}>
          <AnimatedLottieView
            style={styles.otpLottie}
            source={require("../../assets/animations/loading.json")}
            autoPlay
            loop={true}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingView;
