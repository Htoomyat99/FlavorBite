import * as React from "react";
import { Icon, Modal, Portal, Text, useTheme } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { useLocale } from "../hooks/useLocale";
import styles from "./style";

interface Props {
  confirmVisible: boolean;
  hideModal: () => void;
  cancelAction: () => void;
  confirmAction: () => void;
}
const ConfirmModal = ({
  confirmVisible,
  hideModal,
  cancelAction,
  confirmAction,
}: Props) => {
  const theme = useTheme();
  const locale = useLocale();
  return (
    <Portal>
      <Modal
        visible={confirmVisible}
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
              color={theme.colors.primary}
            />
          </View>

          <Text style={styles.errText}>{locale.confirmQue}</Text>

          <View style={styles.confirmFooterContainer}>
            <TouchableOpacity activeOpacity={0.5} onPress={cancelAction}>
              <Text style={styles.confirmBtnText}>{locale.cancel}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={confirmAction}>
              <Text
                style={[
                  styles.confirmBtnText,
                  {
                    borderLeftWidth: wp(0.2),
                    borderColor: "#DDD",
                  },
                ]}
              >
                {locale.confirm}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default ConfirmModal;
