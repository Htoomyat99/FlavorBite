import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { useTheme, Text, Icon } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useLocale } from "@/src/hooks/useLocale";

interface Props {
  photo: string;
  editProfileAction: () => void;
}

const AccountListHeader = ({ photo, editProfileAction }: Props) => {
  const theme = useTheme();
  const locale = useLocale();
  return (
    <View style={styles.userInfoHeaderContainer}>
      <Image
        source={{ uri: photo }}
        style={[styles.userPhoto, { backgroundColor: theme.colors.background }]}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={editProfileAction}
        style={[
          styles.editContainer,
          { backgroundColor: theme.colors.elevation.level5 },
        ]}
      >
        <Icon source={"pencil"} size={wp(5)} />
        <Text style={styles.editText}>{locale.editProfile}</Text>
      </TouchableOpacity>
    </View>
  );
};

const AccountBody = ({ item }: { item: UserInfoType }) => {
  return (
    <View style={styles.userInfoContainer}>
      <Text style={styles.userInfoText}>{item.label}</Text>
      <Text style={styles.userInfoText}>{item.value}</Text>
    </View>
  );
};

export { AccountBody, AccountListHeader };
