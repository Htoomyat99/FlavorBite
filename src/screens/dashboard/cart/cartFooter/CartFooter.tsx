import { View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { useLocale } from "@/src/hooks/useLocale";
import { useTheme, Text } from "react-native-paper";
import { useStore } from "@/src/store/store";

const CartFooter = ({
  orderAction,
}: {
  orderAction: (totalAmount: number) => void;
}) => {
  const locale = useLocale();
  const theme = useTheme();

  const { cartItem } = useStore();

  const totalAmount = cartItem.reduce((acc, item) => acc + item.item_amount, 0);
  const deliFee = 0;
  const netAmount = totalAmount - deliFee;

  const data = [
    {
      id: 1,
      name: locale.subTotal,
      price: totalAmount,
    },
    { id: 2, name: locale.deliveryFee, price: deliFee },
    { id: 3, name: locale.netAmount, price: netAmount },
  ];

  if (cartItem.length > 0) {
    return (
      <View style={styles.container}>
        <View style={styles.footerContainer}>
          {data.map((item) => (
            <View key={item.id} style={styles.dataContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>
                {item.price.toLocaleString()}
                {locale.currency}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => orderAction(totalAmount)}
          style={[
            styles.orderContainer,
            { backgroundColor: theme.colors.primary },
          ]}
        >
          <Text style={styles.order}>{locale.orderNow}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default CartFooter;
