import { View } from "react-native";
import React from "react";
import styles from "./style";
import { Appbar, Button, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import { useLocale } from "@/src/hooks/useLocale";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FormBuilder } from "react-native-paper-form-builder";
import { useForm } from "react-hook-form";
import { getChangePasswordFormArray } from "./ChangePasswordFormData";
import LoadingModal from "@/src/modal/LoadingModal";

interface Props {
  backAction: () => void;
  changePasswordAction: (formData: passType) => void;
}

const ChangePassword = ({ backAction, changePasswordAction }: Props) => {
  const theme = useTheme();
  const locale = useLocale();

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: theme.colors.elevation.level2 }}>
        <Appbar.BackAction onPress={backAction} />
        <Appbar.Content
          title={locale.changePassword}
          titleStyle={{ fontSize: hp(2.5) }}
        />
      </Appbar.Header>

      <View style={styles.fomrBuilder}>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={getChangePasswordFormArray(
            locale.currentPassword,
            locale.currentPasswordRequire,
            locale.newPassword,
            locale.newPasswordRequire,
            locale.confirmPassword,
            locale.confirmPasswordRequire
          )}
        />
      </View>

      <Button
        style={styles.btnContainer}
        mode="contained"
        onPress={handleSubmit(changePasswordAction)}
      >
        {locale.changePassword}
      </Button>
    </View>
  );
};

export default ChangePassword;
