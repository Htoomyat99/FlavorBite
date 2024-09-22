import { supabase } from "@/utils/supabase/supabase";
import { AppState } from "react-native";

export const refreshSession = () => {
  AppState.addEventListener("change", (state) => {
    if (state === "active") {
      supabase.auth.startAutoRefresh();
    } else {
      supabase.auth.stopAutoRefresh();
    }
  });
};
