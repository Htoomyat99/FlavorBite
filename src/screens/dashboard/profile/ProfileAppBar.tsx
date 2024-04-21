import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { useLocale } from "@/src/hooks/useLocale";

const ProfileAppBar = () => {
  const locale = useLocale();
  const theme = useTheme();
  return (
    <Appbar.Header
      mode="center-aligned"
      style={{ backgroundColor: theme.colors.elevation.level2 }}
    >
      <Appbar.Content
        title={locale.profile}
        titleStyle={{ fontSize: hp(2.5) }}
      />
    </Appbar.Header>
  );
};

export default ProfileAppBar;
