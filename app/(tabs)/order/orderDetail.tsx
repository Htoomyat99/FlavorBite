import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useTheme } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import OrderDetailAppBar from "@/src/screens/dashboard/orderDetail/orderDetailAppBar";
import { FlashList } from "@shopify/flash-list";
import OrderDetailList from "@/src/screens/dashboard/orderDetail/orderDetailList/OrderDetailList";
import OrderDetailHeader from "@/src/screens/dashboard/orderDetail/orderDetailList/OrderDetailHeader";
import OrderDetailFooter from "@/src/screens/dashboard/orderDetail/orderDetailList/OrderDetailFooter";
import OrderDetailInfo from "@/src/screens/dashboard/orderDetail/orderDetailInfo/OrderDetailInfo";
import { useStore } from "@/src/store/store";

const orderDetail = () => {
  const params: any = useLocalSearchParams();
  const data = JSON.parse(params.item);
  const theme = useTheme();

  const { userData } = useStore();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <OrderDetailAppBar />

      <OrderDetailInfo orderInfo={data.order} userData={userData} />

      <View style={styles.container}>
        <FlashList
          showsVerticalScrollIndicator={false}
          data={data.orderDetail}
          estimatedItemSize={50}
          ListHeaderComponent={() => <OrderDetailHeader />}
          renderItem={({ item }) => <OrderDetailList data={item} />}
          ListFooterComponent={() => (
            <OrderDetailFooter orderInfo={data.order} />
          )}
          ListFooterComponentStyle={{
            backgroundColor: theme.colors.primaryContainer,
            borderBottomRightRadius: wp(2),
            borderBottomLeftRadius: wp(2),
          }}
          ListHeaderComponentStyle={{
            backgroundColor: theme.colors.primaryContainer,
            borderTopRightRadius: wp(2),
            borderTopLeftRadius: wp(2),
          }}
        />
      </View>
    </View>
  );
};

export default orderDetail;

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(1),
    marginHorizontal: wp(7),
    borderRadius: wp(2),
    flex: 1,
  },
});
