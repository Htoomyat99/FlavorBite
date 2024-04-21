import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import { Appbar, useTheme, Text, Button } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FormBuilder } from "react-native-paper-form-builder";
import { useForm } from "react-hook-form";

import { useLocale } from "@/src/hooks/useLocale";
import styles from "./style";
import { getForgotFormArray } from "../AuthData";

const ResetPassword = ({
  forgotPassAction,
  backAction,
}: {
  forgotPassAction: (data: { email: string }) => void;
  backAction: () => void;
}) => {
  const theme = useTheme();
  const locale = useLocale();

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <Appbar.Header
          mode="center-aligned"
          style={{ backgroundColor: theme.colors.elevation.level2 }}
        >
          <Appbar.BackAction onPress={backAction} />
          <Appbar.Content
            title="Reset Password"
            titleStyle={{ fontSize: hp(2.5) }}
          />
        </Appbar.Header>

        <Text style={styles.headerText}>{locale.forgotPassQue}</Text>

        <Text style={styles.paraText}>{locale.enterEmailText}</Text>

        <View style={styles.formBuilder}>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={getForgotFormArray(
              locale.email,
              locale.emailRequired
            )}
          />
        </View>

        <Button
          style={styles.btnContainer}
          mode="contained"
          onPress={handleSubmit(forgotPassAction)}
        >
          {locale.resetPassword}
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResetPassword;
