import { PageStore } from "@/store/page";
import { ProfileDropdownStore } from "@/store/profileDropdown";
import { LoggedInStore } from "@/store/loggedIn";
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
