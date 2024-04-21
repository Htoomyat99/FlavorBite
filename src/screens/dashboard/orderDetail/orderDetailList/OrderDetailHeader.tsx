import { StyleSheet, View } from "react-native";
import React from "react";
import { Icon, Text, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useLocale } from "@/src/hooks/useLocale";

const OrderDetailHeader = () => {
  const theme = useTheme();
  const locale = useLocale();

  return (
    <View style={styles.container}>
      <Icon
        source={"chess-bishop"}
        size={wp(5.5)}
        color={theme.colors.primary}
      />
      <Text style={styles.headerText}>{locale.orderItem}</Text>
    </View>
  );
};

export default OrderDetailHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp(3),
    flexDirection: "row",
    alignItems: "center",
    paddingTop: hp(1),
  },
  headerText: {
    fontSize: hp(1.6),
    marginLeft: wp(1),
    fontWeight: "700",
  },
});
