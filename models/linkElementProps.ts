import { PageStore } from "@/store/page";

export interface LinkElementProps {
  title:
    | "landingPage"
    | "tryForFreePage"
    | "pricingPage"
    | "profilePage"
    | "settingsPage"
    | "logInPage"
    | "logOutPage";
  page: PageStore["page"];
  setPage: PageStore["setPage"];
}
