"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import Styles from "../styles/Nav.module.css";
import { RiRoadMapFill } from "react-icons/ri";
import { HiUser, HiUserPlus, HiHome } from "react-icons/hi2";
import { SiHandshake } from "react-icons/si";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [navVisible, setNavVisible] = useState<boolean>(false);

  const closeNavbar = function () {
    navVisible && setNavVisible(false);
  };

  const toggleNavbar = function () {
    setNavVisible(!navVisible);
  };

  const navLinks = [
    { path: "/", title: "Accueil", id: 1, icon: <HiHome /> },
    { path: "/login", title: "Se connecter", id: 2, icon: <HiUser /> },
    { path: "/register", title: "S'inscrire", id: 3, icon: <HiUserPlus /> },
    {
      path: "/partner",
      title: "Devenir partenaire",
      id: 4,
      icon: <SiHandshake />,
    },
  ];

  const pathName = usePathname();

  return (
    <header className="z-50 flex fixed w-screen top-0 left-0 shadow-sm right-0 justify-between px-10 sm:px-5 md:px-0 md:justify-around items-center h-[80px] bg-slate-50">
      <Link
        href="/"
        className="flex items-center gap-1 text-indigo-950 uppercase hover:opacity-80 transition-all duration-150"
      >
        <RiRoadMapFill className="text-md" />
        <span className="text-md font-bold">Reservel</span>
      </Link>
      <nav
        className={`${Styles.nav} ${
          navVisible && Styles.nav_visible
        } z-[900] bg-slate-50`}
      >
        {navLinks.map((navItem) => {
          const { path, title, id, icon } = navItem;
          return (
            <Link
              key={id}
              href={path}
              className={`text-indigo-950 w-fit justify-center p-3 transition-colors duration-300 rounded-md text-lg sm:text-sm flex items-center gap-1 font-bold hover:bg-slate-200 
              ${pathName === path && id !== 4 && "text-indigo-800"}
              ${
                id === 4 &&
                "text-white ml-0 md:ml-2 max-w-fit bg-indigo-950 hover:text-indigo-950 py-3 px-6 rounded-md"
              }
              `}
              onClick={closeNavbar}
            >
              {icon}
              <span>{title}</span>
            </Link>
          );
        })}
      </nav>
      <div
        className="flex items-center cursor-pointer justify-center z-[901] w-fit h-fit md:hidden"
        onClick={toggleNavbar}
      >
        {!navVisible ? (
          <FiMenu className="text-3xl" />
        ) : (
          <GrClose className="text-2xl" />
        )}
      </div>
    </header>
  );
}
