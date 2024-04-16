interface AuthType {
  userData: UserType | null;
  updateUserData: (data: UserType | null) => void;
  onboarding: boolean;
  updateOnboarding: (data: boolean) => void;
  userId: string | null;
  updateUserId: (data: string | undefined | null) => void;
}

interface LangType {
  lang: string;
  updateLang: (data: string) => void;
}

interface CartType {
  cartItem: CartDataType[];
  addCartItem: (product: CartDataType) => void;
  deleteEachCartItem: (itemCode: string) => void;
  deleteAllCartItem: () => void;
}

type StoreState = AuthType & LangType & CartType;
