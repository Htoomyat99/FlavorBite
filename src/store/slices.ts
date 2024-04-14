export const createAuthSlice = (set: any): AuthType => ({
  onboarding: false,
  updateOnboarding: (data) => {
    set(() => ({ onboarding: data }));
  },
  userData: null,
  updateUserData: (data) => {
    set(() => ({ userData: data }));
  },
  userId: null,
  updateUserId: (data) => {
    set(() => ({ userId: data }));
  },
});
