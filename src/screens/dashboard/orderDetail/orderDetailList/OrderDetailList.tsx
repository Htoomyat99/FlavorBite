import { View, Image } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";
import styles from "./style";
import { useLocale } from "@/src/hooks/useLocale";

const OrderDetailList = ({ data }: any) => {
  const theme = useTheme();
  const locale = useLocale();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.primaryContainer },
      ]}
    >
      <Image
        style={[styles.image, { backgroundColor: theme.colors.background }]}
        source={{ uri: data.item_image }}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.nameText, { color: theme.colors.primary }]}>
          {data.item_name}
        </Text>
        <Text style={[styles.nameText, { color: theme.colors.primary }]}>
          {locale.qty} - {data.item_qty}
        </Text>
        <Text style={[styles.nameText, { color: theme.colors.primary }]}>
          {data.item_amount.toLocaleString()}
          {locale.currency}
        </Text>
      </View>
    </View>
  );
};

export default OrderDetailList;
