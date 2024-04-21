import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";
import AnimatedLottieView from "lottie-react-native";

import styles from "./style";
import { useLocale } from "@/src/hooks/useLocale";

interface Props {
  item: OrderDataType;
  goOrderDetailAction: () => void;
}
const OrderList = ({ item, goOrderDetailAction }: Props) => {
  const locale = useLocale();
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={goOrderDetailAction}
      activeOpacity={0.8}
      style={[
        styles.mainContainer,
        { backgroundColor: theme.colors.primaryContainer },
      ]}
    >
      <View style={styles.orderContainer}>
        <Text style={styles.orderText}>#FLB00{item.id}</Text>

        {item.delivery_status ? (
          <Text style={styles.complete}>{locale.complete}</Text>
        ) : (
          <AnimatedLottieView
            autoPlay
            loop
            style={styles.pendingLottie}
            source={require("@/assets/animations/waiting2.json")}
          />
        )}
      </View>
      <Text style={styles.amount}>
        {locale.amount} - {item.item_amount.toLocaleString()}
        {locale.currency}
      </Text>
      <Text style={styles.amount}>
        {locale.deliveryStatus} -{" "}
        {item.delivery_status ? locale.delivered : locale.pending}
      </Text>
    </TouchableOpacity>
  );
};

export default OrderList;
