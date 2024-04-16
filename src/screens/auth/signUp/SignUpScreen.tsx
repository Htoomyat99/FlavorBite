import { ScrollView, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { FormBuilder } from "react-native-paper-form-builder";
import { useForm } from "react-hook-form";
import { useLocale } from "@/src/hooks/useLocale";
import { getSignUpFormArray } from "../AuthData";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import LoadingView from "@/src/components/LoadingView";
import ErrorAlertModal from "@/src/components/ErrorAlertModal";

interface Props {
  goSignInAction: () => void;
  signUpAction: (formData: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
  signInWithGoogleAction: () => void;
  loading: boolean;
  errVisible: { status: boolean; message?: string };
  hideModal: () => void;
}
const SignUpScreen = (props: Props) => {
  const locale = useLocale();
  const theme = useTheme();

  const [passSecure, setPassSecure] = useState(true);
  const [confirmPassSecure, setConfirmPassSecure] = useState(true);

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: hp(3) }}
      style={[
        styles.mainContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>{locale.createNewAcc}</Text>
        <Text style={styles.para}>{locale.signUpPara}</Text>

        <View style={styles.formBuilderContainer}>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={getSignUpFormArray(
              locale.email,
              locale.emailRequired,
              locale.pass,
              locale.passRequired,
              locale.confirmPass,
              locale.confirmPassRequired,
              passSecure,
              confirmPassSecure,
              <TextInput.Icon
                onPress={() => setPassSecure(!passSecure)}
                icon={passSecure ? "eye-off" : "eye"}
              />,
              <TextInput.Icon
                onPress={() => setConfirmPassSecure(!confirmPassSecure)}
                icon={confirmPassSecure ? "eye-off" : "eye"}
              />
            )}
          />
        </View>

        <Button
          onPress={handleSubmit(props.signUpAction)}
          style={styles.signUpbtn}
          mode="contained"
        >
          {locale.signUpBtnText}
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
          onPress={props.goSignInAction}
        >
          <Text style={styles.footerQue}>{locale.haveAccountQue}</Text>
          <Text style={[styles.signInText, { color: theme.colors.primary }]}>
            {locale.signIn}
          </Text>
        </TouchableOpacity>
      </View>

      <ErrorAlertModal
        errVisible={props.errVisible}
        hideModal={props.hideModal}
      />
      {props.loading && <LoadingView />}
    </ScrollView>
  );
};

export default SignUpScreen;
