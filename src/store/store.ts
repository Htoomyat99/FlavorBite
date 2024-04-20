import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  createAuthSlice,
  createCartSlice,
  createDarkThemeSlice,
  createLangSlice,
} from "./slices";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create<StoreState>()(
  persist(
    immer((set) => ({
      ...createAuthSlice(set),
      ...createLangSlice(set),
      ...createDarkThemeSlice(set),
      ...createCartSlice(set),
    })),
    {
      name: "myAppStore",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
