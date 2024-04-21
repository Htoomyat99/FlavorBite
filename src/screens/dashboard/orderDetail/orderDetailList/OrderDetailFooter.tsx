import { View } from "react-native";
import React from "react";
import { Divider, useTheme, Text } from "react-native-paper";

import styles from "./style";
import { useLocale } from "@/src/hooks/useLocale";

const OrderDetailFooter = ({ orderInfo }: any) => {
  const locale = useLocale();
  const theme = useTheme();

  let subTotal = orderInfo.item_amount;
  let deliveryFee = 0;
  let grandTotal = subTotal - deliveryFee;

  let data = [
    { id: 1, name: locale.subTotal, price: subTotal },
    { id: 2, name: locale.deliveryFee, price: deliveryFee },
    { id: 3, name: locale.grandTotal, price: grandTotal },
  ];

  return (
    <View style={styles.footerContainer}>
      <Divider bold style={{ backgroundColor: "#CCC" }} />

      <Text style={styles.orderTotalHeader}>{locale.orderTotal}</Text>

      {data.map((item) => {
        return (
          <View key={item.id} style={styles.orderTotalContainer}>
            <Text
              style={[
                styles.subTotal,
                {
                  color:
                    item.id === 3 ? theme.colors.primary : theme.colors.outline,
                },
              ]}
            >
              {item.name}
            </Text>
            <Text
              style={[
                styles.subTotal,
                {
                  color:
                    item.id === 3 ? theme.colors.primary : theme.colors.outline,
                },
              ]}
            >
              {item.price.toLocaleString()} {locale.currency}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default OrderDetailFooter;
