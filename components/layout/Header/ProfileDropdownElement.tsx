import Link from "next/link";

import { ProfileDropdownElementProps } from "@/models/profileDropdownElementProps";

export const ProfileDropdownElement = ({
  title,
  Icon,
  setPage,
  setIsProfileDropdownOpen,
  setIsLoggedIn,
}: ProfileDropdownElementProps) => {
  const handleClick = (
    title:
      | "landingPage"
      | "tryForFreePage"
      | "pricingPage"
      | "profilePage"
      | "settingsPage"
      | "logInPage"
      | "logOutPage",
  ) => {
    if (title === "logOutPage") {
      setIsLoggedIn(false);
    } else {
      setPage(title);
    }
    setIsProfileDropdownOpen(false);
  };

  const getTitle = () => {
    if (title === "profilePage") {
      return "Profile";
    } else if (title === "settingsPage") {
      return "Settings";
    } else if (title === "logInPage") {
      return "Log In";
    } else {
      return "Log Out";
    }
  };

  return (
    <Link
      href={`${title === "logInPage" ? "login" : "/"}`}
      className={`group flex cursor-pointer items-center justify-start rounded-md px-2 py-1 text-[oklch(0.95_0_0)] transition-all duration-300 ease-in-out hover:bg-indigo-700/40 ${title === "logInPage" || title === "logOutPage" ? "" : "mb-1"} `}
      onClick={() => handleClick(title)}
    >
      <span
        className={`mr-2 text-2xl ${title === "settingsPage" ? "group-hover:animate-spin" : ""}`}
        style={{ animationDuration: "2s" }}
      >
        <Icon />
      </span>
      <span className="mr-1 text-sm font-medium">{getTitle()}</span>
    </Link>
  );
};
