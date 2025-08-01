"use client";

import Link from "next/link";

import { RiHome9Line } from "react-icons/ri";
import { RiHome9Fill } from "react-icons/ri";
import { PiMagnifyingGlass } from "react-icons/pi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import { BsGear } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiAccountCircleFill } from "react-icons/ri";

import { IconType } from "react-icons/lib";

import { useState, Dispatch, SetStateAction } from "react";

const Navbar = () => {
  const [page, setPage] = useState<"home" | "post" | "explore" | "profile">(
    "home",
  );

  return (
    <nav
      className={`fixed bottom-0 flex h-18 w-full items-center justify-between border-t border-neutral-800 bg-black px-26 sm:left-0 sm:h-full sm:w-18 sm:flex-col sm:justify-start sm:border-r sm:px-0 sm:py-4 lg:w-58`}
    >
      <NavbarBtn
        title={"explore"}
        Icon={PiMagnifyingGlass}
        FilledIcon={PiMagnifyingGlassBold}
        page={page}
        setPage={setPage}
      />
      <NavbarBtn
        title={"home"}
        Icon={RiHome9Line}
        FilledIcon={RiHome9Fill}
        page={page}
        setPage={setPage}
      />
      <NavbarBtn
        title={"profile"}
        Icon={RiAccountCircleLine}
        FilledIcon={RiAccountCircleFill}
        page={page}
        setPage={setPage}
      />
    </nav>
  );
};

export default Navbar;

type NavbarBtnProps = {
  title: "home" | "post" | "explore" | "profile";
  Icon: IconType;
  FilledIcon: IconType;
  page: "home" | "post" | "explore" | "profile";
  setPage: Dispatch<SetStateAction<"home" | "post" | "explore" | "profile">>;
};

const NavbarBtn = ({
  title,
  Icon,
  FilledIcon,
  page,
  setPage,
}: NavbarBtnProps) => {
  const onClick = (page: "home" | "post" | "explore" | "profile") => {
    setPage(page);
    console.log(page);
  };

  return (
    <div
      onClick={() => onClick(title)}
      className="flex items-center justify-center"
    >
      <span
        className={`flex cursor-pointer items-center justify-start rounded-md p-1.5 transition-colors duration-150 ease-in-out hover:bg-[hsl(0_0%_12%)] lg:w-50 ${page === title ? "text-red-400" : "text-white"} ${title !== "profile" ? "sm:mb-1" : ""}`}
      >
        <span className="text-[1.65rem] lg:mr-2">
          <Link href={`/${title !== "home" ? title : ""}`}>
            {page === title ? <FilledIcon /> : <Icon />}
          </Link>
        </span>
        <span className="hidden text-[1.1rem] font-medium lg:flex">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </span>
      </span>
    </div>
  );
};
