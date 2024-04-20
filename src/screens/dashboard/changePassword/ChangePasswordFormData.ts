import { LogicProps } from "react-native-paper-form-builder/dist/Types/Types";

export const getChangePasswordFormArray = (
  currentPassword: string,
  currentPasswordRequire: string,
  newPassword: string,
  newPasswordRequire: string,
  confirmPassword: string,
  confirmPasswordRequire: string
): (Omit<LogicProps, "control"> | Omit<LogicProps, "control">[])[] => {
  return [
    {
      type: "text",
      name: "currentPassword",
      rules: {
        required: {
          value: true,
          message: currentPasswordRequire,
        },
      },
      textInputProps: {
        label: currentPassword,
      },
    },
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
