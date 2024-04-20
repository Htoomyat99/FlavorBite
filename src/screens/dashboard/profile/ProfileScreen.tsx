import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { useTheme, Text, Icon, Switch } from "react-native-paper";
import { useLocale } from "@/src/hooks/useLocale";
import { FlashList } from "@shopify/flash-list";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useStore } from "@/src/store/store";

interface Props {
  isDarkMode: boolean;
  onToggleSwitch: () => void;
  profileDetailAction: (item: number) => void;
}

const ProfileScreen = (props: Props) => {
  const theme = useTheme();
  const locale = useLocale();

  const { userData } = useStore();

  const profileData: ProfileType[] = [
    { id: 1, name: locale.accountDetail, icon: "badge-account-horizontal" },
    { id: 2, name: locale.changePassword, icon: "key" },
    { id: 3, name: locale.language, icon: "earth" },
    { id: 4, name: locale.darkMode, icon: "white-balance-sunny" },
    { id: 5, name: locale.about, icon: "chat-alert" },
    { id: 6, name: locale.logOut, icon: "logout" },
  ];

  const renderItem = (item: ProfileType) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        activeOpacity={0.8}
        onPress={() => props.profileDetailAction(item.id)}
      >
        <View style={styles.nameContainer}>
          <Icon
            source={item.icon}
            size={wp(5.5)}
            color={theme.colors.primary}
          />
          <Text style={styles.profileName}>{item.name}</Text>
        </View>

        {item.id === 4 ? (
          <Switch
            value={props.isDarkMode}
            onValueChange={props.onToggleSwitch}
          />
        ) : (
          <Icon source={"chevron-right"} size={wp(5.5)} />
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: userData.photo }}
          style={[styles.image, { backgroundColor: theme.colors.background }]}
        />

        <Text style={styles.nameText}>{userData.user_name}</Text>
        <Text style={styles.emailText}>{userData.email}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <FlashList
          showsVerticalScrollIndicator={false}
          data={profileData}
          estimatedItemSize={50}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
