import { useStore } from "../store/store";
import mm from "../utils/helper/mm";
import en from "../utils/helper/en";
import { useState } from "react";

export const useLocale = () => {
  const { lang } = useStore();

  if (lang === "en") {
    return en;
  } else {
    return mm;
  }
};
