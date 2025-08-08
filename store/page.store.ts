import { create } from "zustand";

export interface PageStore {
  page:
    | "landingPage"
    | "tryForFreePage"
    | "pricingPage"
    | "profilePage"
    | "settingsPage"
    | "logInPage"
    | "logOutPage";
  setPage: (
    newPage:
      | "landingPage"
      | "tryForFreePage"
      | "pricingPage"
      | "profilePage"
      | "settingsPage"
      | "logInPage"
      | "logOutPage",
  ) => void;
}

export const usePageStore = create<PageStore>((set) => ({
  page: "landingPage",
  setPage: (
    newPage:
      | "landingPage"
      | "tryForFreePage"
      | "pricingPage"
      | "profilePage"
      | "settingsPage"
      | "logInPage"
      | "logOutPage",
  ) => set(() => ({ page: newPage })),
}));
