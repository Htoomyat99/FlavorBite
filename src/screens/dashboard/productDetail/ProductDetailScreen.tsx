import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Divider, Icon, Text, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useLocale } from "@/src/hooks/useLocale";
import styles from "./style";

interface Props {
  productItem: ProductDataType;
  closeModal: () => void;
  qty: number;
  addQty: () => void;
  reduceQty: () => void;
  addCartAction: (newData: CartDataType) => void;
}

const ProductDetailScreen = ({
  productItem,
  closeModal,
  qty,
  addQty,
  reduceQty,
  addCartAction,
}: Props) => {
  const locale = useLocale();
  const theme = useTheme();

  const totalPrice = productItem.item_price * qty;
  let newCartItem = {
    item_code: productItem.item_code,
    item_name: productItem.item_name,
    item_price: productItem.item_price,
    item_description: productItem.item_description,
    item_image: productItem.item_image,
    item_qty: qty,
    item_amount: totalPrice,
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={closeModal} style={styles.clostBtnContainer}>
        <Icon source={"close"} size={wp(6.5)} />
      </TouchableOpacity>

      <Image style={styles.image} source={{ uri: productItem.item_image }} />

      <View style={styles.headerContainer}>
        <Text style={styles.itemName}>{productItem.item_name}</Text>
        <Text style={styles.itemPrice}>
          {productItem.item_price.toLocaleString()}
          {locale.currency}
        </Text>
      </View>

      <Text style={styles.itemDesc}>{productItem.item_description}</Text>

      <Divider style={{ marginTop: hp(2) }} />

      <View style={styles.qtyContainer}>
        <TouchableOpacity style={styles.qtyIconContainer} onPress={reduceQty}>
          <Icon source={"minus"} size={wp(5.5)} />
        </TouchableOpacity>

        <Text style={styles.qty}>{qty}</Text>

        <TouchableOpacity style={styles.qtyIconContainer} onPress={addQty}>
          <Icon source={"plus"} size={wp(5.5)} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => addCartAction(newCartItem)}
        activeOpacity={0.8}
        disabled={qty === 0}
        style={[
          styles.addCartContainer,
          {
            backgroundColor:
              qty === 0 ? theme.colors.onSurfaceDisabled : theme.colors.primary,
          },
        ]}
      >
        <Text style={styles.addCartText}>{locale.addCart} - </Text>
        <Text style={styles.addCartText}>
          {totalPrice.toLocaleString()} {locale.currency}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;
