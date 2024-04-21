import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "react-native-paper";
import { useRouter } from "expo-router";

import useInternetConnection from "@/src/hooks/useInternetLocation";
import { useStore } from "@/src/store/store";
import LanguageModal from "@/src/modal/LanguageModal";
import { signOutWithEmail } from "@/domain/auth/sign_out_with_email";
import ProfileAppBar from "@/src/screens/dashboard/profile/ProfileAppBar";
import ProfileScreen from "@/src/screens/dashboard/profile/ProfileScreen";
import ConfirmModal from "@/src/modal/ConfirmModal";
import LoadingModal from "@/src/modal/LoadingModal";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
import { useLocale } from "@/src/hooks/useLocale";
import { getUserData } from "@/domain/dashboard/get_user_data";

const index = () => {
  const router = useRouter();
  const theme = useTheme();
  const locale = useLocale();
  const net = useInternetConnection();

  const { isDarkMode, updateDarkMode, userId, updateUserData, orderTrigger } =
    useStore();

  useEffect(() => {
    fetchUserData();
  }, [orderTrigger]);

  const [userData, setUserData] = useState({} as UserType);
  const [confirmVisible, setconfirmVisible] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    setLoading(true);
    const { data, error } = await getUserData(userId as string);
    if (error) {
      setErrVisible({ status: true, message: error.message });
      setLoading(false);
      return;
    }

    setUserData(data[0]);
    updateUserData(data[0]);
    setLoading(false);
  };
  const openLangModal = () => {
    setVisible(true);
  };

  const onToggleSwitch = () => {
    updateDarkMode(!isDarkMode);
  };

  const signOutAction = async () => {
    setLoading(true);

    const { error } = await signOutWithEmail();
    if (error) {
      setErrVisible({ status: true, message: error.message });
      setLoading(false);
      return;
    }

    setLoading(false);
    router.replace("/signIn");
  };

  const hideModal = () => {
    setconfirmVisible(false);
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
        setconfirmVisible(true);
        break;
      default:
        setErrVisible({ status: true, message: locale.somethingWrong });
        break;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
      <ProfileAppBar />

      <ProfileScreen
        isDarkMode={isDarkMode}
        onToggleSwitch={onToggleSwitch}
        profileDetailAction={profileDetailAction}
        userData={userData}
      />

      <LanguageModal visible={visible} hideModal={() => setVisible(false)} />

      <ConfirmModal
        confirmVisible={confirmVisible}
        hideModal={hideModal}
        cancelAction={hideModal}
        confirmAction={signOutAction}
      />

      <ErrorAlertModal
        errVisible={errVisible}
        hideModal={() => setErrVisible({ status: false, message: "" })}
      />

      {loading && <LoadingModal />}
    </View>
  );
};

export default index;
