import * as React from "react";
import { Icon, Modal, Portal, Text, useTheme } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { useLocale } from "../hooks/useLocale";
import styles from "./style";

interface Props {
  errVisible: { status: boolean; message?: string };
  hideModal: () => void;
}

const ErrorAlertModal = ({ errVisible, hideModal }: Props) => {
  const theme = useTheme();
  const locale = useLocale();
  return (
    <Portal>
      <Modal
        visible={errVisible.status}
        onDismiss={hideModal}
        contentContainerStyle={[
          styles.errModalContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <View>
          <View style={styles.errorContainer}>
            <Icon
              source={"alert-circle"}
              size={wp(12)}
              color={theme.colors.error}
            />
          </View>
          <Text style={styles.errHeaderText}>{locale.error}</Text>

          <Text style={styles.errText}>{errVisible.message}</Text>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={hideModal}
            style={styles.btnContainer}
          >
            <Text style={styles.btnText}>{locale.gotIt}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  );
};

export default ErrorAlertModal;
