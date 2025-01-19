"use client";

import { createPageStore, PageState } from "@/store/Store";
import { createContext, ReactNode, useRef } from "react";
import { useStore } from "zustand";
import { useContext } from "react";

export type PageSotreApi = ReturnType<typeof createPageStore>;
export const PageStoreContext = createContext<PageSotreApi | null>(null);
export interface PageStoreProviderProps {
  children: ReactNode;
}

export const PageStoreProvider = ({ children }: PageStoreProviderProps) => {
  const storeRef = useRef<PageSotreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createPageStore();
  }
  return (
    <PageStoreContext.Provider value={storeRef.current}>
      {children}
    </PageStoreContext.Provider>
  );
};

export const usePageStore = <T,>(selector: (store: PageState) => T): T => {
  const pageStoreContext = useContext(PageStoreContext);

  if (!pageStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(pageStoreContext, selector);
};
