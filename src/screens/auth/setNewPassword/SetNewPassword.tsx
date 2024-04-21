import { View } from "react-native";
import React from "react";
import { Appbar, Button, Text, useTheme } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FormBuilder } from "react-native-paper-form-builder";
import { useForm } from "react-hook-form";

import styles from "./style";
import { getResetFormArray } from "../AuthData";
import { useLocale } from "@/src/hooks/useLocale";

const SetNewPassword = ({
  resetPasswordAction,
}: {
  resetPasswordAction: (data: {
    newPassword: string;
    confirmPassword: string;
  }) => void;
}) => {
  const locale = useLocale();
  const theme = useTheme();
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });
  return (
    <View style={styles.container}>
      <Appbar.Header
        mode="center-aligned"
        style={{ backgroundColor: theme.colors.elevation.level2 }}
      >
        <Appbar.Content
          title="Reset Password"
          titleStyle={{ fontSize: hp(2.5) }}
        />
      </Appbar.Header>

      <Text style={styles.headerText}>{locale.enterNewPassword}</Text>

      <Text style={styles.paraText}>{locale.passShouldDifferent}</Text>

      <View style={styles.formBuilder}>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={getResetFormArray(
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
        onPress={handleSubmit(resetPasswordAction)}
      >
        {locale.resetPassword}
      </Button>
    </View>
  );
};

export default SetNewPassword;
