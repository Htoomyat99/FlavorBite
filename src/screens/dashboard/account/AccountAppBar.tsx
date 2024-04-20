import { useLocale } from "@/src/hooks/useLocale";
import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const AccountAppBar = ({ backAction }: { backAction: () => void }) => {
  const theme = useTheme();
  const locale = useLocale();

  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.elevation.level2 }}>
      <Appbar.BackAction onPress={backAction} />
      <Appbar.Content
        title={locale.userInfo}
        titleStyle={{ fontSize: hp(2.5) }}
      />
    </Appbar.Header>
  );
};

export default AccountAppBar;
