import { BackHandler, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTheme } from "react-native-paper";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { FlipType, SaveFormat, manipulateAsync } from "expo-image-manipulator";

import UserRegister from "@/src/screens/auth/userRegister/UserRegister";
import { useStore } from "@/src/store/store";
import CameraModal from "@/src/modal/CameraModal";
import LoadingModal from "@/src/modal/LoadingModal";
import CustomCamera from "@/src/components/CustomCamera";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";
import { insertUserData } from "@/domain/auth/insert_user_data";

interface updateUserType {
  name: string;
  phone: string;
  address: string;
}

const userRegister = () => {
  const router = useRouter();
  const theme = useTheme();
  const params = useLocalSearchParams();

  const cameraRef: React.MutableRefObject<any> = useRef(null);

  const { updateUserData, userId } = useStore();

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState(
    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );
  const [cameraVisible, setCameraVisible] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

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
            { compress: 1, format: SaveFormat.JPEG }
          );
        }
        setPhoto(newPhoto.uri);
        setOpenCamera(false);
        setCameraVisible(false);
      } catch (error) {
        console.log("error >>", error);
      }
    }
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
      id: userId,
      user_name: formData.name,
      phone: formData.phone,
      address: formData.address,
      photo: photo,
      email: params.email as string,
    };

    setLoading(true);
    const { data, error } = await insertUserData(userInfo);

    if (error) {
      setErrVisible({ status: true, message: error.message });
      setLoading(false);
      return;
    }

    setLoading(false);
    updateUserData(data[0]);
    router.push("/(tabs)/home");
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.elevation.level1 }}>
      <UserRegister
        openCameraModal={() => setCameraVisible(true)}
        updateUserInfoAction={updateUserInfoAction}
        photo={photo}
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

export default userRegister;
