import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { FormBuilder } from "react-native-paper-form-builder";

import { useLocale } from "@/src/hooks/useLocale";
import { getSignInFormArray } from "../AuthData";
import styles from "./style";
import { signInWithEmail } from "@/domain/auth/sign_in_with_email";

interface Props {
  goSignUpAction: () => void;
  signInAction: (formData: { email: string; password: string }) => void;
  signInWithGoogleAction: () => void;
  forgotPassAction: () => void;
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
    <ScrollView style={styles.mainContainer}>
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
              <TextInput.Icon icon="eye" />
            )}
          />
        </View>

        {/* <Text
          onPress={props.forgotPassAction}
          style={[styles.forgotPass, { color: theme.colors.primary }]}
        >
          {locale.forgotPass}
        </Text> */}

        <Pressable
          onPress={handleSubmit(props.signInAction)}
          style={{ ...styles.signUpbtn, backgroundColor: theme.colors.primary }}
        >
          <Text style={{ ...styles.btnText, color: theme.colors.onPrimary }}>
            {locale.signInBtnText}
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
          onPress={props.goSignUpAction}
        >
          <Text style={styles.footerQue}>{locale.dontHaveAccQue}</Text>
          <Text style={[styles.signInText, { color: theme.colors.primary }]}>
            {locale.signUp}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
