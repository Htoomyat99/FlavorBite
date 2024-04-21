import { View } from "react-native";
import React from "react";
import { Camera, CameraType } from "expo-camera";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { IconButton } from "react-native-paper";
import styles from "./style";

interface Props {
  cameraRef: React.LegacyRef<Camera> | undefined;
  type: CameraType;
  toggleCameraType: () => void;
  closeCameraAction: () => void;
  cameraShootAction: () => void;
}

const CustomCamera = (props: Props) => {
  return (
    <View style={styles.cameraMainContainer}>
      <View style={styles.iconContainer}>
        <IconButton
          icon="camera-flip-outline"
          iconColor={"#DDD"}
          size={wp(10)}
          onPress={props.toggleCameraType}
        />

        <IconButton
          icon="close-circle-outline"
          iconColor={"#DDD"}
          size={wp(10)}
          onPress={props.closeCameraAction}
        />
      </View>

      <Camera
        ref={props.cameraRef}
        style={{ flex: 1 }}
        type={props.type}
      ></Camera>

      <View style={styles.container}>
        <IconButton
          iconColor="#fff"
          icon="circle"
          size={wp(22)}
          onPress={props.cameraShootAction}
        />
      </View>
    </View>
  );
};

export default CustomCamera;
