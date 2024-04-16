import { useStore } from "../store/store";
import en from "../utils/helper/en";
import mm from "../utils/helper/mm";

export const useLocale = () => {
  const { lang } = useStore();

  if (lang === "en") {
    return en;
  } else {
    return mm;
  }
};
