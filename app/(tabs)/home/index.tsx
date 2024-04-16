import { View } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { useTheme } from "react-native-paper";
import useInternetConnection from "@/src/hooks/useInternetLocation";
import ProductSearchBar from "@/src/screens/dashboard/product/searchBar/ProductSearchBar";
import ProductList from "@/src/screens/dashboard/product/productList/ProductList";
import CustomBottomSheetModal from "@/src/components/CustomBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import ProductDetailScreen from "@/src/screens/dashboard/productDetail/ProductDetailScreen";
import { useStore } from "@/src/store/store";
import { useRouter } from "expo-router";

const index = () => {
  const theme = useTheme();
  const router = useRouter();
  const net = useInternetConnection();

  const { addCartItem, cartItem } = useStore();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "93%"], []);

  const [searchText, setSearchText] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({} as ProductDataType);
  const [qty, setQty] = useState(1);

  const onChangeText = (text: string) => {
    setSearchText(text);
  };

  const goProductDetail = (item: ProductDataType) => {
    bottomSheetModalRef.current?.present();
    setSelectedProduct(item);
    let index = cartItem.findIndex((data) => data.item_code === item.item_code);
    if (index !== -1) {
      setQty(cartItem[index].item_qty);
    } else {
      setQty(1);
    }
  };

  const closeModal = () => {
    bottomSheetModalRef.current?.close();
  };

  const addCartAction = (newData: CartDataType) => {
    addCartItem(newData);
    bottomSheetModalRef.current?.close();
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ProductSearchBar
        goCartAction={() => router.push("/home/cart")}
        searchText={searchText}
        onChangeText={onChangeText}
      />

      <ProductList goProductDetail={goProductDetail} />

      <CustomBottomSheetModal
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        childern={
          <ProductDetailScreen
            productItem={selectedProduct}
            closeModal={closeModal}
            qty={qty}
            addQty={() => setQty(qty + 1)}
            reduceQty={() => qty > 0 && setQty(qty - 1)}
            addCartAction={addCartAction}
          />
        }
      />
    </View>
  );
};

export default index;
