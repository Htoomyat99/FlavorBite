import { View } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Icon, useTheme, Text } from "react-native-paper";

import { useLocale } from "@/src/hooks/useLocale";
import styles from "./style";

interface Props {
  orderInfo: any;
  userData: UserType;
}

const OrderDetailInfo = ({ orderInfo, userData }: Props) => {
  const theme = useTheme();
  const locale = useLocale();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.primaryContainer },
      ]}
    >
      <View style={styles.headerContainer}>
        <View style={styles.orderInfoContainer}>
          <Icon
            source={"map-marker-radius"}
            size={wp(5.5)}
            color={theme.colors.primary}
          />
          <Text style={styles.orderInfo}>{locale.orderInfo}</Text>
        </View>
        <Text style={styles.statusText}>
          {orderInfo.delivery_status ? locale.complete : locale.pending}
        </Text>
      </View>

      <Text style={[styles.idText, { color: theme.colors.primary }]}>
        {locale.orderId} #FLB00{orderInfo.id}
      </Text>
      <Text style={[styles.idText, { color: theme.colors.primary }]}>
        {userData.user_name}
      </Text>
      <Text style={[styles.idText, { color: theme.colors.primary }]}>
        {userData.phone}
      </Text>
      <Text style={[styles.idText, { color: theme.colors.outline }]}>
        {userData.address}
      </Text>
    </View>
  );
};

export default OrderDetailInfo;
