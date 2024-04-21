import { View, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { useNavigation } from "expo-router";
import { FlashList } from "@shopify/flash-list";

import { useStore } from "@/src/store/store";
import { getOrderItems } from "@/domain/dashboard/get_order_items";
import { getOrderDetailItem } from "@/domain/dashboard/get_order_detail_item";
import OrderAppBar from "@/src/screens/dashboard/order/OrderAppBar";
import LoadingModal from "@/src/modal/LoadingModal";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
import OrderList from "@/src/screens/dashboard/order/orderList/OrderList";
import OrderEmpty from "@/src/screens/dashboard/order/orderList/OrderEmpty";

type NavigationProps = {
  navigate: (name: string, params?: { [key: string]: any }) => void;
};

const order = () => {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProps>();
  const { orderTrigger, userId } = useStore();

  const [orderData, setOrderData] = useState<OrderDataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  useEffect(() => {
    getOrder();
  }, [orderTrigger]);

  const getOrder = async () => {
    setLoading(true);
    const { data, error } = await getOrderItems(userId as string);
    if (error) {
      setLoading(false);
      setErrVisible({ status: true, message: error.message });
      return;
    }
    setOrderData(data);
    setLoading(false);
  };

  const goOrderDetailAction = async (item: OrderDataType) => {
    setLoading(true);
    const { data, error } = await getOrderDetailItem(item.id);
    if (error) {
      setLoading(false);
      setErrVisible({ status: true, message: error.message });
      return;
    }

    let mergeOrderAndOrderDetailData = {
      order: { ...item },
      orderDetail: data,
    };

    setLoading(false);
    navigation.navigate("orderDetail", {
      item: JSON.stringify(mergeOrderAndOrderDetailData),
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
      <OrderAppBar />

      {orderData.length === 0 && !loading ? (
        <OrderEmpty />
      ) : (
        <View style={{ flex: 1 }}>
          <FlashList
            showsVerticalScrollIndicator={false}
            data={orderData}
            estimatedItemSize={50}
            renderItem={({ item }) => (
              <OrderList
                goOrderDetailAction={() => goOrderDetailAction(item)}
                item={item}
              />
            )}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => getOrder()}
              />
            }
          />
        </View>
      )}

      <ErrorAlertModal
        errVisible={errVisible}
        hideModal={() => setErrVisible({ status: false, message: "" })}
      />

      {loading && <LoadingModal />}
    </View>
  );
};

export default order;
