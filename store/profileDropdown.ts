import { create } from "zustand";

export interface ProfileDropdownStore {
  isProfileDropdownOpen: boolean;
  setIsProfileDropdownOpen: (boolean: boolean) => void;
  toggleProfileDropdown: () => void;
}

export const useProfileDropdownStore = create<ProfileDropdownStore>((set) => ({
  isProfileDropdownOpen: false,
  setIsProfileDropdownOpen: (boolean: boolean) =>
    set(() => ({ isProfileDropdownOpen: boolean })),
  toggleProfileDropdown: () =>
    set((state) => ({ isProfileDropdownOpen: !state.isProfileDropdownOpen })),
}));
