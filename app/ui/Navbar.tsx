"use client";

import Link from "next/link";

import { RiHome9Line } from "react-icons/ri";
import { RiHome9Fill } from "react-icons/ri";
import { PiMagnifyingGlass } from "react-icons/pi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { PiGear } from "react-icons/pi";
import { PiGearFill } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiAccountCircleFill } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

import { IconType } from "react-icons/lib";

import { useState, Dispatch, SetStateAction } from "react";

const Navbar = () => {
  const [page, setPage] = useState<
    "home" | "explore" | "settings" | "profile" | "login" | "settings"
  >("home");

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const [showProfileDisplay, setShowProfileDisplay] = useState<boolean>(false);

  return (
    <nav
      className={`fixed left-0 flex h-full w-18 flex-col items-center justify-start border-t border-r border-neutral-800 bg-black py-4 lg:w-58`}
    >
      <NavbarBtn
        title={"home"}
        Icon={RiHome9Line}
        FilledIcon={RiHome9Fill}
        page={page}
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        showProfileDisplay={showProfileDisplay}
        setShowProfileDisplay={setShowProfileDisplay}
      />
      <NavbarBtn
        title={"explore"}
        Icon={PiMagnifyingGlass}
        FilledIcon={PiMagnifyingGlassBold}
        page={page}
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        showProfileDisplay={showProfileDisplay}
        setShowProfileDisplay={setShowProfileDisplay}
      />
      <NavbarBtn
        title={"settings"}
        Icon={PiGear}
        FilledIcon={PiGearFill}
        page={page}
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        showProfileDisplay={showProfileDisplay}
        setShowProfileDisplay={setShowProfileDisplay}
      />
      <NavbarBtn
        title={"profile"}
        Icon={RiAccountCircleLine}
        FilledIcon={RiAccountCircleFill}
        page={page}
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        showProfileDisplay={showProfileDisplay}
        setShowProfileDisplay={setShowProfileDisplay}
      />
      {showProfileDisplay ? (
        <ProfileDisplay
          page={page}
          setPage={setPage}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          showProfileDisplay={showProfileDisplay}
          setShowProfileDisplay={setShowProfileDisplay}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;

type NavbarBtnProps = {
  title: "home" | "explore" | "settings" | "profile" | "login";
  Icon: IconType;
  FilledIcon: IconType;
  page: "home" | "explore" | "settings" | "profile" | "login";
  setPage: Dispatch<
    SetStateAction<"home" | "explore" | "settings" | "profile" | "login">
  >;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  showProfileDisplay: boolean;
  setShowProfileDisplay: Dispatch<SetStateAction<boolean>>;
};

const NavbarBtn = ({
  title,
  Icon,
  FilledIcon,
  page,
  setPage,
  setShowProfileDisplay,
}: NavbarBtnProps) => {
  return (
    <span
      className={`flex cursor-pointer items-center justify-start rounded-md p-1.5 transition-all duration-300 ease-in-out hover:bg-[hsl(0_0%_12%)] lg:w-50 ${page === title ? "text-red-400" : "text-white"} ${title !== "profile" ? "mb-1" : ""}`}
      onClick={
        title !== "profile"
          ? () => setPage(title)
          : () => setShowProfileDisplay((prev) => !prev)
      }
    >
      <span className="text-[1.65rem] lg:mr-2">
        <Link href={`/${title}`}>
          {page === title ? <FilledIcon /> : <Icon />}
        </Link>
      </span>
      <span className="hidden text-[1.1rem] font-medium lg:flex">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </span>
    </span>
  );
};

type ProfileDisplayProps = {
  page: "home" | "explore" | "settings" | "profile" | "login";
  setPage: Dispatch<
    SetStateAction<"home" | "explore" | "settings" | "profile" | "login">
  >;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  showProfileDisplay: boolean;
  setShowProfileDisplay: Dispatch<SetStateAction<boolean>>;
};

const ProfileDisplay = ({
  setPage,
  isLoggedIn,
  setShowProfileDisplay,
}: ProfileDisplayProps) => {
  const onClick = () => {
    setShowProfileDisplay(false);
    setPage("profile");
  };
  return (
    <div
      className="z-50 mt-2 hidden w-50 flex-col rounded-md bg-neutral-900 p-1 lg:flex"
      onClick={onClick}
    >
      <Link href="/profile">
        <span className="text-md flex cursor-pointer items-center justify-start rounded-md p-1.5 font-medium text-white transition-all duration-300 ease-in-out hover:bg-[hsl(0_0%_12%)]">
          <GoPerson className="mr-2 text-2xl" /> View profile
        </span>
      </Link>
      <Link
        href={`${isLoggedIn ? "" : "/login"}`}
        onClick={() => setPage("login")}
      >
        <span className="text-md flex cursor-pointer items-center justify-start rounded-md p-1.5 font-medium text-white transition-all duration-300 ease-in-out hover:bg-[hsl(0_0%_12%)]">
          {isLoggedIn ? (
            <>
              <CiLogout className="mr-2 text-2xl" /> Log out
            </>
          ) : (
            <>
              <CiLogin className="mr-2 text-2xl" /> Log in
            </>
          )}
        </span>
      </Link>
    </div>
  );
};
