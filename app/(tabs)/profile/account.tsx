import { ToastAndroid, View } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { useTheme } from "react-native-paper";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { FlipType, SaveFormat, manipulateAsync } from "expo-image-manipulator";

import {
  AccountListHeader,
  AccountBody,
} from "@/src/screens/dashboard/account/AccountBody";
import { FlashList } from "@shopify/flash-list";
import { useStore } from "@/src/store/store";
import { useLocale } from "@/src/hooks/useLocale";
import CustomBottomSheetModal from "@/src/modal/CustomBottomSheetModal";
import EditAccount from "@/src/screens/dashboard/editAccount/EditAccount";
import { updateUserInfo } from "@/domain/auth/update_user";
import LoadingModal from "@/src/modal/LoadingModal";
import CameraModal from "@/src/modal/CameraModal";
import CustomCamera from "@/src/components/CustomCamera";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
import AccountAppBar from "@/src/screens/dashboard/account/AccountAppBar";

interface updateUserType {
  name: string;
  phone: string;
  address: string;
}

const account = () => {
  const router = useRouter();
  const locale = useLocale();
  const theme = useTheme();

  const { userData, userId, updateUserData, orderTrigger, setOrderTrigger } =
    useStore();

  let splitParts = userId ? userId.split("-") : [];
  let id = splitParts[3] + "-" + splitParts[4];

  const data: UserInfoType[] = [
    { id: 1, label: locale.accountId, value: id },
    { id: 2, label: locale.email, value: userData?.email },
    { id: 3, label: locale.userName, value: userData?.user_name },
    { id: 4, label: locale.phone, value: userData?.phone },
    { id: 5, label: locale.address, value: userData?.address },
  ];

  const cameraRef: React.MutableRefObject<any> = useRef(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "93%"], []);

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraVisible, setCameraVisible] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const [photo, setPhoto] = useState(
    userData.photo
      ? userData.photo
      : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );
  const [type, setType] = useState(CameraType.back);
  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  const editProfileAction = () => {
    bottomSheetModalRef.current?.present();
    setPhoto(userData.photo);
  };

  const openGalleryAction = async () => {
    if (cameraRef) {
      try {
        let newPhoto = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 1,
          aspect: [4, 3],
        });
        if (!newPhoto.canceled) {
          setPhoto(newPhoto?.assets[0].uri);
        }
      } catch (error) {
        console.log("error >>", error);
      }
      setCameraVisible(false);
    }
  };

  const closeCameraAction = () => {
    setOpenCamera(false);
    setCameraVisible(false);
  };

  const cameraShootAction = async () => {
    if (cameraRef) {
      try {
        let newPhoto = await cameraRef?.current.takePictureAsync();
        if (type == CameraType.front) {
          newPhoto = await manipulateAsync(
            newPhoto.localUri || newPhoto.uri,
            [{ rotate: 180 }, { flip: FlipType.Vertical }],
            { compress: 1, format: SaveFormat.PNG }
          );
        }
        setPhoto(newPhoto.uri);
        setOpenCamera(false);
        setCameraVisible(false);
        bottomSheetModalRef.current?.present();
      } catch (error) {
        console.log("error >>", error);
      }
    }
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  if (openCamera && permission?.granted) {
    return (
      <CustomCamera
        cameraRef={cameraRef}
        type={type}
        toggleCameraType={toggleCameraType}
        closeCameraAction={closeCameraAction}
        cameraShootAction={cameraShootAction}
      />
    );
  }

  const updateUserInfoAction = async (formData: updateUserType) => {
    let userInfo = {
      user_name: formData.name,
      phone: formData.phone,
      address: formData.address,
      photo: photo,
    };

    setLoading(true);
    const { data, error } = await updateUserInfo(userInfo, userId);

    if (error) {
      setErrVisible({ status: true, message: error.message });
      setLoading(false);
      return;
    }

    setLoading(false);
    updateUserData(data[0]);
    bottomSheetModalRef.current?.close();
    ToastAndroid.show(locale.updateProfileSuccess, ToastAndroid.SHORT);
  };

  const backAction = () => {
    router.back();
    setOrderTrigger(!orderTrigger);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
      <AccountAppBar backAction={backAction} />

      <FlashList
        showsVerticalScrollIndicator={false}
        data={data}
        estimatedItemSize={50}
        ListHeaderComponent={() => (
          <AccountListHeader
            photo={userData?.photo}
            editProfileAction={editProfileAction}
          />
        )}
        renderItem={({ item }) => <AccountBody item={item} />}
      />

      <CustomBottomSheetModal
        bottomSheetModalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        childern={
          <EditAccount
            closeBottomSheetAction={() => bottomSheetModalRef.current?.close()}
            userData={userData ? userData : ({} as UserType)}
            openCameraModal={() => setCameraVisible(true)}
            updateUserInfoAction={updateUserInfoAction}
            photo={photo}
          />
        }
      />

      <CameraModal
        cameraModalVisible={cameraVisible}
        hideCameraModal={() => setCameraVisible(false)}
        onCameraPress={() => {
          requestPermission();
          setOpenCamera(true);
        }}
        onGalleryPress={openGalleryAction}
      />

      <ErrorAlertModal
        errVisible={errVisible}
        hideModal={() => setErrVisible({ status: false, message: "" })}
      />

      {loading && <LoadingModal />}
    </View>
  );
};

export default account;
