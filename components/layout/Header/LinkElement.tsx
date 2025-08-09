import Link from "next/link";

import { LinkElementProps } from "@/models/linkElementProps";

export const LinkELement = ({ title, page, setPage }: LinkElementProps) => {
  const handleClick = (
    page:
      | "landingPage"
      | "tryForFreePage"
      | "pricingPage"
      | "profilePage"
      | "settingsPage"
      | "logInPage"
      | "logOutPage",
  ) => {
    setPage(page);
  };

  const getTitle = () => {
    if (title === "landingPage") {
      return "Landing Page";
    } else if (title === "tryForFreePage") {
      return "Try For Free";
    } else {
      return "Pricing";
    }
  };

  return (
    <Link
      href={`/${title === "tryForFreePage" || title === "pricingPage" ? "pricing" : ""}`}
      className={`flex cursor-pointer items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-0.5 ${page === title ? "text-white" : "text-[oklch(0.75_0_0)] hover:text-[oklch(0.95_0_0)]"}`}
      onClick={() => handleClick(title)}
    >
      <span className="sm:text-md text-sm font-medium">{getTitle()}</span>
    </Link>
  );
};
