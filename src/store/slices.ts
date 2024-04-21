export const createAuthSlice = (set: SetType): AuthType => ({
  onboarding: false,
  updateOnboarding: (data) => {
    set(() => ({ onboarding: data }));
  },
  userData: {} as UserType,
  updateUserData: (data) => {
    set(() => ({ userData: data }));
  },
  userId: null,
  updateUserId: (data) => {
    set(() => ({ userId: data }));
  },
  resetPass: false,
  updateResetPass: (data) => {
    set(() => ({ resetPass: data }));
  },
});

export const createLangSlice = (set: SetType): LangType => ({
  lang: "en",
  updateLang: (data) => {
    set(() => ({ lang: data }));
  },
});

export const createDarkThemeSlice = (set: SetType): DarkThemeType => ({
  isDarkMode: false,
  updateDarkMode: (data) => {
    set(() => ({ isDarkMode: data }));
  },
});

export const createCartSlice = (set: SetType): CartType => ({
  cartItem: [],
  addCartItem: (product) => {
    set((state) => {
      let index = state.cartItem.findIndex(
        (item: CartDataType) => item.item_code === product.item_code
      );

      if (index !== -1) {
        state.cartItem[index].item_qty = product.item_qty;
        state.cartItem[index].item_amount = product.item_amount;
      } else {
        state.cartItem.push(product);
      }
    });
  },
  deleteEachCartItem: (itemCode) => {
    set((state) => {
      state.cartItem = state.cartItem.filter(
        (item: CartDataType) => item.item_code !== itemCode
      );
    });
  },
  deleteAllCartItem: () => {
    set((state) => {
      state.cartItem = [];
    });
  },

  orderTrigger: false,
  setOrderTrigger: (data) => {
    set(() => ({ orderTrigger: data }));
  },
});
