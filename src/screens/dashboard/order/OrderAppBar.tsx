import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useLocale } from "@/src/hooks/useLocale";

const OrderAppBar = () => {
  const locale = useLocale();
  const theme = useTheme();
  return (
    <Appbar.Header
      mode="center-aligned"
      style={{ backgroundColor: theme.colors.elevation.level1 }}
    >
      <Appbar.Content title={locale.order} titleStyle={{ fontSize: hp(2.5) }} />
    </Appbar.Header>
  );
};

export default OrderAppBar;
