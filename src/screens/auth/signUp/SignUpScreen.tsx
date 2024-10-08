import { Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { FormBuilder } from "react-native-paper-form-builder";
import { useForm } from "react-hook-form";

import styles from "./style";
import { useLocale } from "@/src/hooks/useLocale";
import { getSignUpFormArray } from "../AuthData";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface Props {
  goSignInAction: () => void;
  signUpAction: (formData: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
  signInWithGoogleAction: () => void;
}
const SignUpScreen = (props: Props) => {
  const locale = useLocale();
  const theme = useTheme();

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [passSecure, setPassSecure] = useState(true);
  const [confirmPassSecure, setConfirmPassSecure] = useState(true);

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

        <Pressable
          onPress={handleSubmit(props.signUpAction)}
          style={{ ...styles.signUpbtn, backgroundColor: theme.colors.primary }}
        >
          <Text style={{ ...styles.btnText, color: theme.colors.onPrimary }}>
            {locale.signUpBtnText}
          </Text>
        </Pressable>

        <Text style={styles.continueText}>{locale.continueWith}</Text>

        <Pressable
          style={{ ...styles.signUpbtn, backgroundColor: theme.colors.primary }}
        >
          <Text style={{ ...styles.btnText, color: theme.colors.onPrimary }}>
            {locale.signInWithGoogle}
          </Text>
        </Pressable>

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
    </ScrollView>
  );
};

export default SignUpScreen;
