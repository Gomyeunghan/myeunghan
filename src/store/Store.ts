import { createStore } from "zustand";

export type PageState = {
  isValied: boolean;
};
export type PageAction = { setIsValied: () => void };
export type PageStore = PageState & PageAction;
export const defaultIniState: PageState = {
  isValied: true,
};

export const createPageStore = (initState: PageState = defaultIniState) => {
  return createStore<PageStore>()((set) => ({
    ...initState,
    setIsValied: () => set((state) => ({ isValied: state.isValied })),
  }));
};
