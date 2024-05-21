"use client";

import { useState } from "react";
import { HamburgerMenuButton } from "../hamburger-menu/hamburger-menu-button";
import style from "./sidebar.module.scss";
import { useFonts } from "../../FontContext";

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dawning } = useFonts();

  function toggleMenuOpen() {
    setMenuOpen((prevValue: boolean) => !prevValue);
  }

  return (
    <aside className="fixed lg:border-r lg:border-slate-200 lg:relative w-full lg:w-80 lg:shrink-0 bg-white text-center lg:flex lg:flex-col lg:justify-around lg:items-center">
      <header className="h-12 flex items-center justify-between">
        <span
          className={`${dawning.className} text-4xl pl-3 lg:pl-0`}
        >
          Martina Mancuso
        </span>
        <HamburgerMenuButton
          className="lg:hidden"
          isEnabled={menuOpen}
          onClick={toggleMenuOpen}
        />
      </header>
      <nav
        className={`overflow-hidden ${style.menu} ${
          menuOpen ? style.menuOpen : ""
        }`}
      >
        <ul>
          <li className="p-2">home</li>
          <li className="p-2">about</li>
          {/* <li className="p-2">Portfolio</li> */}
          <li className="p-2">blog</li>
          <li className="p-2">contact</li>
        </ul>
      </nav>
      <footer className="hidden lg:block">SOCIAL ICONS</footer>
    </aside>
  );
}
