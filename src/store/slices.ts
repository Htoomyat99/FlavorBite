export const createAuthSlice = (set: any): AuthType => ({
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
});

export const createLangSlice = (set: any): LangType => ({
  lang: "en",
  updateLang: (data) => {
    set(() => ({ lang: data }));
  },
});

export const createDarkThemeSlice = (set: any): DarkThemeType => ({
  isDarkMode: false,
  updateDarkMode: (data) => {
    set(() => ({ isDarkMode: data }));
  },
});

export const createCartSlice = (set: any): CartType => ({
  cartItem: [],
  addCartItem: (product) => {
    set((state: any) => {
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
    set((state: any) => {
      state.cartItem = state.cartItem.filter(
        (item: CartDataType) => item.item_code !== itemCode
      );
    });
  },
  deleteAllCartItem: () => {
    set((state: any) => {
      state.cartItem = [];
    });
  },
});
