import { PageStore } from "@/store/page.store";
import { ProfileDropdownStore } from "@/store/profileDropdown.store";
import { LoggedInStore } from "@/store/loggedIn.store";
import { IconType } from "react-icons";

export interface ProfileDropdownElementProps {
  title:
    | "landingPage"
    | "tryForFreePage"
    | "pricingPage"
    | "profilePage"
    | "settingsPage"
    | "logInPage"
    | "logOutPage";
  Icon: IconType;
  setPage: PageStore["setPage"];
  setIsProfileDropdownOpen: ProfileDropdownStore["setIsProfileDropdownOpen"];
  setIsLoggedIn: LoggedInStore["setIsLoggedIn"];
}
