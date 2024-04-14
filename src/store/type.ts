interface AuthType {
  userData: UserType | null;
  updateUserData: (data: UserType | null) => void;
  onboarding: boolean;
  updateOnboarding: (data: boolean) => void;
  userId: string | null;
  updateUserId: (data: string | undefined | null) => void;
}

type StoreState = AuthType;
