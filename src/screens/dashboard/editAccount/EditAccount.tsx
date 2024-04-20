import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { Button, Icon, useTheme } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FormBuilder } from "react-native-paper-form-builder";
import { useForm } from "react-hook-form";
import { getEditFormConfig } from "./EditFormConfigData";
import { useLocale } from "@/src/hooks/useLocale";

interface Props {
  closeBottomSheetAction: () => void;
  userData: UserType;
  openCameraModal: () => void;
  updateUserInfoAction: (data: any) => void;
  photo: string;
}

const EditAccount = ({
  closeBottomSheetAction,
  userData,
  openCameraModal,
  updateUserInfoAction,
  photo,
}: Props) => {
  const theme = useTheme();
  const locale = useLocale();

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      name: userData.user_name,
      phone: userData.phone,
      address: userData.address,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        activeOpacity={0.8}
        onPress={closeBottomSheetAction}
      >
        <Icon source={"close"} size={wp(6)} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.imageContainer}
        onPress={openCameraModal}
      >
        <Image
          source={{ uri: photo }}
          style={[
            styles.image,
            { backgroundColor: theme.colors.elevation.level2 },
          ]}
        />
        <View style={styles.editContainer}>
          <Icon source={"camera"} size={wp(5.5)} />
        </View>
      </TouchableOpacity>

      <View style={styles.formBuilder}>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={getEditFormConfig(
            locale.userName,
            locale.nameReqire,
            locale.phone,
            locale.phoneReqire,
            locale.address,
            locale.addressReqire
          )}
        />
      </View>

      <Button
        mode="contained"
        onPress={handleSubmit(updateUserInfoAction)}
        style={styles.confirmBtn}
        labelStyle={styles.confirmBtnText}
      >
        {locale.confirm}
      </Button>
    </View>
  );
};

export default EditAccount;
