import { ReactNode } from "react";
import { LogicProps } from "react-native-paper-form-builder/dist/Types/Types";

export const getSignUpFormArray = (
  email: string,
  emailRequire: string,
  pass: string,
  passRequire: string,
  confirmPass: string,
  confirmPassRequire: string,
  passSecure: boolean,
  confirmPassSecure: boolean,
  hidePassIcon: ReactNode,
  hideConfirmPassSecure: ReactNode
): (Omit<LogicProps, "control"> | Omit<LogicProps, "control">[])[] => {
  return [
    {
      type: "email",
      name: "email",

      rules: {
        required: {
          value: true,
          message: emailRequire,
        },
      },
      textInputProps: {
        label: email,
      },
    },
    {
      type: "text",
      name: "password",
      rules: {
        required: {
          value: true,
          message: passRequire,
        },
      },
      textInputProps: {
        label: pass,
        secureTextEntry: passSecure,
        right: hidePassIcon,
      },
    },
    {
      type: "text",
      name: "confirmPassword",
      rules: {
        required: {
          value: true,
          message: confirmPassRequire,
        },
      },
      textInputProps: {
        label: confirmPass,
        secureTextEntry: confirmPassSecure,
        right: hideConfirmPassSecure,
      },
    },
  ];
};

export const getSignInFormArray = (
  email: string,
  emailRequire: string,
  pass: string,
  passRequire: string,
  passSecure: boolean,
  hidePassIcon: ReactNode
): (Omit<LogicProps, "control"> | Omit<LogicProps, "control">[])[] => {
  return [
    {
      type: "email",
      name: "email",

      rules: {
        required: {
          value: true,
          message: emailRequire,
        },
      },
      textInputProps: {
        label: email,
      },
    },
    {
      type: "text",
      name: "password",
      rules: {
        required: {
          value: true,
          message: passRequire,
        },
      },
      textInputProps: {
        label: pass,
        secureTextEntry: passSecure,
        right: hidePassIcon,
      },
    },
  ];
};

export const getForgotFormArray = (
  email: string,
  emailRequire: string
): (Omit<LogicProps, "control"> | Omit<LogicProps, "control">[])[] => {
  return [
    {
      type: "email",
      name: "email",

      rules: {
        required: {
          value: true,
          message: emailRequire,
        },
      },
      textInputProps: {
        label: email,
      },
    },
  ];
};

export const getResetFormArray = (
  newPassword: string,
  newPasswordRequire: string,
  confirmPassword: string,
  confirmPasswordRequire: string
): (Omit<LogicProps, "control"> | Omit<LogicProps, "control">[])[] => {
  return [
    {
      type: "text",
      name: "newPassword",

      rules: {
        required: {
          value: true,
          message: newPasswordRequire,
        },
      },
      textInputProps: {
        label: newPassword,
      },
    },
    {
      type: "text",
      name: "confirmPassword",
      rules: {
        required: {
          value: true,
          message: confirmPasswordRequire,
        },
      },
      textInputProps: {
        label: confirmPassword,
      },
    },
  ];
};
