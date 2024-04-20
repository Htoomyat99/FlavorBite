import { View, Text, Alert } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { useTheme } from "react-native-paper";
import useInternetConnection from "@/src/hooks/useInternetLocation";
import { useStore } from "@/src/store/store";
import { insertUserData } from "@/domain/auth/insert_user_data";
import LanguageModal from "@/src/modal/LanguageModal";
import { signOutWithEmail } from "@/domain/auth/sign_out_with_email";
import { useRouter } from "expo-router";
import ProfileAppBar from "@/src/screens/dashboard/profile/ProfileAppBar";
import ProfileScreen from "@/src/screens/dashboard/profile/ProfileScreen";
import ConfirmModal from "@/src/modal/ConfirmModal";
import ChangePassword from "@/src/screens/dashboard/changePassword/ChangePassword";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
import LoadingModal from "@/src/modal/LoadingModal";

const index = () => {
  const router = useRouter();
  const theme = useTheme();
  const net = useInternetConnection();

  const { isDarkMode, updateDarkMode } = useStore();
  const onToggleSwitch = () => updateDarkMode(!isDarkMode);

  const [errVisible, setErrVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const openLangModal = () => {
    setVisible(true);
  };

  const signOutAction = async () => {
    setLoading(true);
    const { error } = await signOutWithEmail();
    if (error) {
      Alert.alert(error.name, error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.replace("/signIn");
  };

  const hideModal = () => {
    setErrVisible(false);
  };

  const profileDetailAction = (item: number) => {
    switch (item) {
      case 1:
        router.push("/profile/account");
        break;
      case 2:
        router.push("/profile/changePassword");
        break;
      case 3:
        openLangModal();
        break;
      case 4:
        updateDarkMode(!isDarkMode);
        break;
      case 5:
        router.push("/profile/about");
        break;
      case 6:
        setErrVisible(true);
        break;
      default:
        console.log("show error");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
      <ProfileAppBar />

      <ProfileScreen
        isDarkMode={isDarkMode}
        onToggleSwitch={onToggleSwitch}
        profileDetailAction={profileDetailAction}
      />

      <LanguageModal visible={visible} hideModal={() => setVisible(false)} />

      <ConfirmModal
        errVisible={errVisible}
        hideModal={hideModal}
        cancelAction={hideModal}
        confirmAction={signOutAction}
      />

      {loading && <LoadingModal />}
    </View>
  );
};

export default index;
