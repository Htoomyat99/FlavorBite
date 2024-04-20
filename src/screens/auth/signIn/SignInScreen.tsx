import { ScrollView, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { FormBuilder } from "react-native-paper-form-builder";
import { useForm } from "react-hook-form";
import { useLocale } from "@/src/hooks/useLocale";
import { getSignInFormArray } from "../AuthData";
import LoadingModal from "@/src/modal/LoadingModal";
import ErrorAlertModal from "@/src/modal/ErrorAlertModal";

interface Props {
  goSignUpAction: () => void;
  signInAction: (formData: { email: string; password: string }) => void;
  signInWithGoogleAction: () => void;
  forgotPassAction: () => void;
  loading: boolean;
  errVisible: { status: boolean; message?: string };
  hideModal: () => void;
}
const SignInScreen = (props: Props) => {
  const locale = useLocale();
  const theme = useTheme();

  const [passSecure, setPassSecure] = useState(true);
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <ScrollView
      style={[
        styles.mainContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>{locale.welcome}</Text>
        <Text style={styles.para}>{locale.signInPara}</Text>

        <View style={styles.formBuilderContainer}>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={getSignInFormArray(
              locale.email,
              locale.emailRequired,
              locale.pass,
              locale.passRequired,
              passSecure,
              <TextInput.Icon
                onPress={() => setPassSecure(!passSecure)}
                icon={passSecure ? "eye-off" : "eye"}
              />
            )}
          />
        </View>

        <Text
          onPress={props.forgotPassAction}
          style={[styles.forgotPass, { color: theme.colors.primary }]}
        >
          {locale.forgotPass}
        </Text>

        <Button
          onPress={handleSubmit(props.signInAction)}
          style={styles.signUpbtn}
          mode="contained"
        >
          {locale.signInBtnText}
        </Button>

        <Text style={styles.continueText}>{locale.continueWith}</Text>

        <Button
          onPress={props.signInWithGoogleAction}
          style={styles.btnContainer}
          icon={"google"}
          mode="contained"
        >
          {locale.signInWithGoogle}
        </Button>

        <TouchableOpacity
          style={styles.footerContainer}
          activeOpacity={0.5}
          onPress={props.goSignUpAction}
        >
          <Text style={styles.footerQue}>{locale.dontHaveAccQue}</Text>
          <Text style={[styles.signInText, { color: theme.colors.primary }]}>
            {locale.signUp}
          </Text>
        </TouchableOpacity>
      </View>

      <ErrorAlertModal
        errVisible={props.errVisible}
        hideModal={props.hideModal}
      />

      {props.loading && <LoadingModal />}
    </ScrollView>
  );
};

export default SignInScreen;
