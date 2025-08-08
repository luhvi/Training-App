"use client";

import { usePageStore } from "@/store/page.store";
import { useProfileDropdownStore } from "@/store/profileDropdown.store";
import { useLoggedInStore } from "@/store/loggedIn.store";

import { LinkELement } from "./LinkElement";
import { ProfileDropdownElement } from "./ProfileDropdownElement";

import { GoPerson } from "react-icons/go";
import { PiGear } from "react-icons/pi";
import { MdOutlineLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const page = usePageStore((state) => state.page);
  const setPage = usePageStore((state) => state.setPage);
  const isProfileDropdownOpen = useProfileDropdownStore(
    (state) => state.isProfileDropdownOpen,
  );
  const toggleProfileDropdown = useProfileDropdownStore(
    (state) => state.toggleProfileDropdown,
  );
  const setIsProfileDropdownOpen = useProfileDropdownStore(
    (state) => state.setIsProfileDropdownOpen,
  );
  const isLoggedIn = useLoggedInStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useLoggedInStore((state) => state.setIsLoggedIn);

  return (
    <nav className="fixed top-12 z-50 flex w-full items-center justify-center">
      <div className="relative flex w-full flex-row items-center justify-center">
        <div
          className={
            "flex h-18 items-center justify-between gap-6 rounded-full bg-black/10 px-8 shadow-lg ring-1 ring-white/10 backdrop-blur-2xl"
          }
        >
          <LinkELement title={"landingPage"} page={page} setPage={setPage} />

          <LinkELement title={"tryForFreePage"} page={page} setPage={setPage} />
          <LinkELement title={"pricingPage"} page={page} setPage={setPage} />
        </div>
        <div
          className="absolute right-18 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/10 text-center font-medium text-[oklch(0.95_0_0)] shadow-lg ring-1 ring-white/10 backdrop-blur-2xl"
          onClick={toggleProfileDropdown}
        >
          TC
        </div>
        {isProfileDropdownOpen && isLoggedIn ? (
          <div className="absolute top-18 right-18 flex flex-col justify-center rounded-md bg-black/10 p-1.5 shadow-lg ring-1 ring-white/10 backdrop-blur-2xl">
            <ProfileDropdownElement
              title={"profilePage"}
              Icon={GoPerson}
              setPage={setPage}
              setIsProfileDropdownOpen={setIsProfileDropdownOpen}
              setIsLoggedIn={setIsLoggedIn}
            />
            <ProfileDropdownElement
              title={"settingsPage"}
              Icon={PiGear}
              setPage={setPage}
              setIsProfileDropdownOpen={setIsProfileDropdownOpen}
              setIsLoggedIn={setIsLoggedIn}
            />
            <ProfileDropdownElement
              title={"logOutPage"}
              Icon={MdLogout}
              setPage={setPage}
              setIsProfileDropdownOpen={setIsProfileDropdownOpen}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
        ) : isProfileDropdownOpen && !isLoggedIn ? (
          <div className="absolute top-18 right-18 flex flex-col justify-center rounded-lg bg-black/10 p-1.5 shadow-lg ring-1 ring-white/10 backdrop-blur-2xl">
            <ProfileDropdownElement
              title={"logInPage"}
              Icon={MdOutlineLogin}
              setPage={setPage}
              setIsProfileDropdownOpen={setIsProfileDropdownOpen}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
