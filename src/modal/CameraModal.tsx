import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon, Modal, Portal, useTheme, Text } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import styles from "./style";
import { useLocale } from "@/src/hooks/useLocale";

interface Props {
  cameraModalVisible: boolean;
  hideCameraModal: () => void;
  onCameraPress: () => void;
  onGalleryPress: () => void;
}

const CameraModal = (props: Props) => {
  const locale = useLocale();
  const theme = useTheme();

  return (
    <Portal>
      <Modal
        visible={props.cameraModalVisible}
        onDismiss={props.hideCameraModal}
        contentContainerStyle={styles.cameraMainContainer}
      >
        <View
          style={[
            styles.cameraContainer,
            { backgroundColor: theme.colors.background },
          ]}
        >
          <Text style={styles.openText}>{locale.openWith}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={props.onCameraPress}
              style={[
                styles.cameraBtnContainer,
                { backgroundColor: theme.colors.elevation.level3 },
              ]}
            >
              <Icon source={"camera"} size={wp(5.5)} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={props.onGalleryPress}
              style={[
                styles.cameraBtnContainer,
                { backgroundColor: theme.colors.elevation.level2 },
              ]}
            >
              <Icon source={"view-gallery-outline"} size={wp(5.5)} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default CameraModal;
