import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useLocale } from "@/src/hooks/useLocale";
import { useRouter } from "expo-router";

const OrderDetailAppBar = () => {
  const locale = useLocale();
  const router = useRouter();
  const theme = useTheme();

  return (
    <Appbar.Header
      mode="center-aligned"
      style={{ backgroundColor: theme.colors.elevation.level1 }}
    >
      <Appbar.BackAction onPress={() => router.back()} />
      <Appbar.Content
        title={locale.orderDetail}
        titleStyle={{ fontSize: hp(2.5) }}
      />
    </Appbar.Header>
  );
};

export default OrderDetailAppBar;
