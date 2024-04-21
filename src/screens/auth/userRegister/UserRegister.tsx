import {
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Appbar, Button, Icon, useTheme } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FormBuilder } from "react-native-paper-form-builder";
import { useForm } from "react-hook-form";

import styles from "./style";
import { useLocale } from "@/src/hooks/useLocale";
import { getEditFormConfig } from "../../dashboard/editAccount/EditFormConfigData";

interface Props {
  openCameraModal: () => void;
  updateUserInfoAction: (data: any) => void;
  photo: string;
}

const UserRegister = ({
  openCameraModal,
  updateUserInfoAction,
  photo,
}: Props) => {
  const theme = useTheme();
  const locale = useLocale();

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      address: "",
    },
  });
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Appbar.Header
          mode="center-aligned"
          style={{ backgroundColor: theme.colors.elevation.level2 }}
        >
          <Appbar.Content
            title={locale.userInfo}
            titleStyle={{ fontSize: hp(2.5) }}
          />
        </Appbar.Header>

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
          {locale.update}
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UserRegister;
