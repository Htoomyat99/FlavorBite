interface AuthType {
  userData: UserType;
  updateUserData: (data: UserType) => void;
  onboarding: boolean;
  updateOnboarding: (data: boolean) => void;
  userId: string | null;
  updateUserId: (data: string | undefined | null) => void;
}

interface LangType {
  lang: string;
  updateLang: (data: string) => void;
}

interface DarkThemeType {
  isDarkMode: boolean;
  updateDarkMode: (data: boolean) => void;
}

interface CartType {
  cartItem: CartDataType[];
  addCartItem: (product: CartDataType) => void;
  deleteEachCartItem: (itemCode: string) => void;
  deleteAllCartItem: () => void;
}

type StoreState = AuthType & LangType & DarkThemeType & CartType;
