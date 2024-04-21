import { TouchableOpacity, Image } from "react-native";
import React from "react";
import { useTheme, Text, Badge } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import styles from "./style";
import { useStore } from "@/src/store/store";
import { useLocale } from "@/src/hooks/useLocale";

interface Props {
  goProductDetail: (item: ProductDataType) => void;
  item: ProductDataType;
}

const ProductList = ({ goProductDetail, item }: Props) => {
  const theme = useTheme();
  const locale = useLocale();
  const { cartItem } = useStore();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => goProductDetail(item)}
      style={[
        styles.productContainer,
        {
          backgroundColor: theme.colors.primaryContainer,
          borderColor: cartItem.some(
            (data) => data.item_code === item.item_code
          )
            ? "#ffd700"
            : theme.colors.primaryContainer,
        },
      ]}
    >
      {cartItem.map(
        (data) =>
          data.item_code === item.item_code && (
            <Badge
              key={data.item_code}
              style={{ position: "absolute", top: -wp(2) }}
              size={wp(8.5)}
            >
              {data.item_qty}
            </Badge>
          )
      )}

      <Image style={styles.image} source={{ uri: item.item_image }} />
      <Text style={styles.nameText}>{item.item_name}</Text>
      <Text style={styles.priceText}>
        {item.item_price} {locale.currency}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductList;
