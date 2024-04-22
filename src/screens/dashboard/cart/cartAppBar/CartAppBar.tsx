import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import { useLocale } from "@/src/hooks/useLocale";

const CartAppBar = ({ backAction }: { backAction: () => void }) => {
  const router = useRouter();
  const locale = useLocale();
  const theme = useTheme();

  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.elevation.level2 }}>
      <Appbar.BackAction onPress={backAction} />
      <Appbar.Content title={locale.cart} titleStyle={{ fontSize: hp(2.5) }} />
    </Appbar.Header>
  );
};

export default CartAppBar;
