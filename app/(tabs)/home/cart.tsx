import { Alert, ToastAndroid, View } from "react-native";
import React, { useState } from "react";
import { useStore } from "@/src/store/store";
import CartAppBar from "@/src/screens/dashboard/cart/cartAppBar/CartAppBar";
import CartList from "@/src/screens/dashboard/cart/cartList/CartList";
import { FlashList } from "@shopify/flash-list";
import EmptyCart from "@/src/screens/dashboard/cart/cartList/EmptyCart";
import { useTheme } from "react-native-paper";
import CartFooter from "@/src/screens/dashboard/cart/cartFooter/CartFooter";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import { insertOrderAndOrderDetail } from "@/domain/dashboard/insert_order_and_order_detail";
import LoadingModal from "@/src/modal/LoadingModal";
import { useLocale } from "@/src/hooks/useLocale";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";

const cart = () => {
  const theme = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const {
    cartItem,
    deleteEachCartItem,
    addCartItem,
    userId,
    deleteAllCartItem,
  } = useStore();

  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  const deleteEachCartAction = (itemCode: string) => {
    deleteEachCartItem(itemCode);
  };

  const qtyAddAction = (item: CartDataType) => {
    let newData = {
      ...item,
      item_qty: item.item_qty + 1,
      item_amount: item.item_price * (item.item_qty + 1),
    };
    addCartItem(newData);
  };

  const qtyReduceAction = (item: CartDataType) => {
    if (item.item_qty > 1) {
      let newData = {
        ...item,
        item_qty: item.item_qty - 1,
        item_amount: item.item_price * (item.item_qty - 1),
      };
      addCartItem(newData);
    } else {
      deleteEachCartAction(item.item_code);
    }
  };

  const orderAction = async (totalAmount: number) => {
    let orderData = {
      customer_id: userId,
      customer_name: "htoo myat",
      delivery_date: null,
      item_amount: totalAmount,
    };

    let orderDetailData = cartItem.map((item) => {
      const { item_description, ...rest } = item;
      return rest;
    });

    setLoading(true);
    const { data, error } = await insertOrderAndOrderDetail(
      orderData,
      orderDetailData
    );

    if (error) {
      setErrVisible({ status: true, message: error.message });
      setLoading(false);
      return;
    }

    setLoading(false);
    router.back();
    router.push("/(tabs)/order");
    deleteAllCartItem();
    ToastAndroid.show(locale.orderSuccess, ToastAndroid.SHORT);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <CartAppBar />

      {cartItem.length > 0 ? (
        <View style={{ height: hp(70) }}>
          <FlashList
            data={cartItem}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={20}
            renderItem={({ item }) => (
              <CartList
                item={item}
                qtyAddAction={qtyAddAction}
                qtyReduceAction={qtyReduceAction}
                deleteEachCartAction={() =>
                  deleteEachCartAction(item.item_code)
                }
              />
            )}
          />
        </View>
      ) : (
        <EmptyCart />
      )}

      <CartFooter orderAction={orderAction} />

      <ErrorAlertModal
        errVisible={errVisible}
        hideModal={() => setErrVisible({ status: false, message: "" })}
      />

      {loading && <LoadingModal />}
    </View>
  );
};

export default cart;
