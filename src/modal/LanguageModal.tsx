import { View } from "react-native";
import React, { useState } from "react";
import { Modal, Portal, Text } from "react-native-paper";
import styles from "./style";
import { useStore } from "../store/store";
import { useLocale } from "../hooks/useLocale";

interface Props {
  visible: boolean;
  hideModal: () => void;
}

const LanguageModal = ({ visible, hideModal }: Props) => {
  const locale = useLocale();

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
        contentContainerStyle={styles.modalContainer}
      >
        <Text style={styles.headerText}>{locale.language}</Text>
        {data.map((item, index) => (
          <View key={index}>
            <Text
              onPress={() => langChangeHandler(item.id)}
              style={[
                styles.langText,
                {
                  backgroundColor: selected === item.id ? "green" : "#ccc",
                  color: selected === item.id ? "#fff" : "#000",
                },
              ]}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </Modal>
    </Portal>
  );
};

export default LanguageModal;
