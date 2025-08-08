import { create } from "zustand";

export interface LoggedInStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (boolean: boolean) => void;
}

export const useLoggedInStore = create<LoggedInStore>((set) => ({
  isLoggedIn: true,
  setIsLoggedIn: (boolean: boolean) => set(() => ({ isLoggedIn: boolean })),
}));
