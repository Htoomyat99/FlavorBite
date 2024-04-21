import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Icon, useTheme, Text } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import styles from "./style";
import { useLocale } from "@/src/hooks/useLocale";

interface Props {
  item: CartDataType;
  deleteEachCartAction: () => void;
  qtyAddAction: (item: CartDataType) => void;
  qtyReduceAction: (item: CartDataType) => void;
}

const CartList = ({
  item,
  deleteEachCartAction,
  qtyAddAction,
  qtyReduceAction,
}: Props) => {
  const locale = useLocale();
  const theme = useTheme();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          style={[
            styles.image,
            { backgroundColor: theme.colors.primaryContainer },
          ]}
          source={{ uri: item.item_image }}
        />

        <View style={styles.itemAndQtyContainer}>
          <Text style={styles.name}>{item.item_name}</Text>
          <View
            style={[
              styles.qtyContainer,
              { borderColor: theme.colors.tertiary },
            ]}
          >
            <TouchableOpacity
              onPress={() => qtyReduceAction(item)}
              style={styles.iconContainer}
            >
              <Icon source={"minus"} size={wp(5.5)} />
            </TouchableOpacity>
            <Text style={styles.qty}>{item.item_qty}</Text>
            <TouchableOpacity
              onPress={() => qtyAddAction(item)}
              style={styles.iconContainer}
            >
              <Icon source={"plus"} size={wp(5.5)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.removeAndpriceContainer}>
        <Text
          onPress={deleteEachCartAction}
          style={[styles.remove, { color: theme.colors.error }]}
        >
          {locale.remove}
        </Text>
        <Text>
          {item.item_amount.toLocaleString()}
          {locale.currency}
        </Text>
      </View>
    </View>
  );
};

export default CartList;
