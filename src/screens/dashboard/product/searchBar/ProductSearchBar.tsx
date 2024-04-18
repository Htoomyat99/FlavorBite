import { View, TouchableOpacity, Keyboard } from "react-native";
import React from "react";
import { Badge, Icon, Searchbar } from "react-native-paper";
import styles from "./style";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useLocale } from "@/src/hooks/useLocale";
import { useStore } from "@/src/store/store";

interface Props {
  searchText: string;
  onChangeText: (text: string) => void;
  goCartAction: () => void;
}

const ProductSearchBar = ({
  searchText,
  onChangeText,
  goCartAction,
}: Props) => {
  const locale = useLocale();

  const { cartItem } = useStore();
  const totalQty = cartItem.reduce((acc, item) => acc + item.item_qty, 0);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder={locale.search}
        onChangeText={onChangeText}
        value={searchText}
        style={styles.searchBar}
        elevation={1}
        mode="bar"
        inputStyle={styles.inputStyle}
        onClearIconPress={() => Keyboard.dismiss()}
      />

      <TouchableOpacity activeOpacity={0.5} onPress={goCartAction}>
        {cartItem.length > 0 && (
          <Badge style={styles.badgeStyle}>{totalQty}</Badge>
        )}
        <Icon source={"cart"} size={wp(6.5)} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductSearchBar;
