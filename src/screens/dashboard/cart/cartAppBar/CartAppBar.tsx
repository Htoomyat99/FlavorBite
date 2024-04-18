import React from "react";
import { Appbar } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import { useLocale } from "@/src/hooks/useLocale";

const CartAppBar = () => {
  const router = useRouter();
  const locale = useLocale();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => router.back()} />
      <Appbar.Content title={locale.cart} titleStyle={{ fontSize: hp(2.5) }} />
    </Appbar.Header>
  );
};

export default CartAppBar;
