import { RefreshControl, StyleSheet, View } from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "react-native-paper";
import useInternetConnection from "@/src/hooks/useInternetLocation";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { FlashList } from "@shopify/flash-list";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import ProductSearchBar from "@/src/screens/dashboard/product/searchBar/ProductSearchBar";
import ProductList from "@/src/screens/dashboard/product/productList/ProductList";
import CustomBottomSheetModal from "@/src/modal/CustomBottomSheetModal";
import ProductDetailScreen from "@/src/screens/dashboard/productDetail/ProductDetailScreen";
import { useStore } from "@/src/store/store";
import { getUserData } from "@/domain/dashboard/get_user_data";
import { getSaleItems } from "@/domain/dashboard/get_sale_items";
import LoadingModal from "@/src/modal/LoadingModal";
import EmptyProduct from "@/src/screens/dashboard/product/productList/EmptyProduct";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";

const index = () => {
  const theme = useTheme();
  const router = useRouter();
  const net = useInternetConnection();

  useEffect(() => {
    fetchSaleItems();
  }, []);

  const { addCartItem, cartItem, userId, updateUserData } = useStore();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "93%"], []);

  const [productData, setProductData] = useState<ProductDataType[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({} as ProductDataType);
  const [searchData, setSearchData] = useState<ProductDataType[]>([]);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  const fetchSaleItems = async () => {
    setLoading(true);
    const { data, error } = await getSaleItems();

    if (error) {
      setLoading(false);
      setErrVisible({ status: true, message: error.message });
      return;
    }

    setProductData(data);
    setLoading(false);
  };

  const onChangeText = (text: string) => {
    setSearchText(text);
    searchHandler(text);
  };

  const searchHandler = (text: string) => {
    const filteredItems = productData.filter((item) =>
      item.item_name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchData(filteredItems);
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

  const data = searchText.length > 0 ? searchData : productData;

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
      <ProductSearchBar
        goCartAction={() => router.push("/home/cart")}
        searchText={searchText}
        onChangeText={onChangeText}
      />

      <View style={styles.container}>
        {data.length === 0 && !loading ? (
          <EmptyProduct />
        ) : (
          <FlashList
            numColumns={2}
            data={data}
            extraData={false}
            estimatedItemSize={100}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ProductList goProductDetail={goProductDetail} item={item} />
            )}
            refreshControl={
              <RefreshControl
                onRefresh={() => fetchSaleItems()}
                refreshing={loading}
              />
            }
          />
        )}
      </View>

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

      <ErrorAlertModal
        errVisible={errVisible}
        hideModal={() => setErrVisible({ status: false, message: "" })}
      />

      {loading && <LoadingModal />}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    height: hp(82),
    marginTop: hp(3),
    paddingLeft: wp(5),
  },
});
