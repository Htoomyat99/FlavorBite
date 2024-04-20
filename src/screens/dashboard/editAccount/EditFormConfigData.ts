import { LogicProps } from "react-native-paper-form-builder/dist/Types/Types";

export const getEditFormConfig = (
  userName: string,
  nameRequire: string,
  phone: string,
  phoneRequire: string,
  address: string,
  addressRequire: string
): (Omit<LogicProps, "control"> | Omit<LogicProps, "control">[])[] => {
  return [
    {
      type: "text",
      name: "name",
      rules: {
        required: {
          value: true,
          message: nameRequire,
        },
      },
      textInputProps: {
        label: userName,
      },
    },
    {
      type: "text",
      name: "phone",
      rules: {
        required: {
          value: true,
          message: phoneRequire,
        },
      },
      textInputProps: {
        label: phone,
        keyboardType: "number-pad",
      },
    },
    {
      type: "text",
      name: "address",
      rules: {
        required: {
          value: true,
          message: addressRequire,
        },
      },
      textInputProps: {
        label: address,
      },
    },
  ];
};
