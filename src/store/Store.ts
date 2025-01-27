import { createStore } from "zustand";

export type PageState = {
  isValied: boolean;
  isDialog: boolean;
};

export type PageAction = {
  setIsValied: () => void;
  setDialog: (value: boolean) => void;
};

export type PageStore = PageState & PageAction;

export const defaultIniState: PageState = {
  isValied: true,
  isDialog: false,
};

export const createPageStore = (initState: PageState = defaultIniState) => {
  return createStore<PageStore>()((set) => ({
    ...initState,
    setIsValied: () => set((state) => ({ isValied: !state.isValied })),
    setDialog: (value: boolean) => set({ isDialog: value }),
  }));
};
