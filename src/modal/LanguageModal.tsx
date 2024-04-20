import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Icon, Modal, Portal, Text, useTheme } from "react-native-paper";
import styles from "./style";
import { useStore } from "../store/store";
import { useLocale } from "../hooks/useLocale";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

interface Props {
  visible: boolean;
  hideModal: () => void;
}

const LanguageModal = ({ visible, hideModal }: Props) => {
  const locale = useLocale();
  const theme = useTheme();

  const [selected, setSelected] = useState("en");
  const { updateLang } = useStore();

  let data = [
    { id: "en", name: "English" },
    { id: "mm", name: "Myanmar" },
  ];

  const langChangeHandler = (id: string) => {
    setSelected(id);
    updateLang(id);
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={[
          styles.modalContainer,
          { backgroundColor: theme.colors.elevation.level5 },
        ]}
      >
        <Text style={styles.headerText}>{locale.language}</Text>
        {data.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => langChangeHandler(item.id)}
            key={index}
            style={[
              styles.langContainer,
              { backgroundColor: selected === item.id ? "#663399" : "#ddd" },
            ]}
          >
            <Text
              style={[
                styles.langText,
                { color: selected === item.id ? "#fff" : "#000" },
              ]}
            >
              {item.name}
            </Text>
            {selected === item.id && (
              <View style={styles.tickIcon}>
                <Icon source={"check"} size={wp(5.5)} color={"#fff"} />
              </View>
            )}
          </TouchableOpacity>
        ))}
      </Modal>
    </Portal>
  );
};

export default LanguageModal;
