"use client";

import { useState } from "react";
import { HamburgerMenuButton } from "../hamburger-menu/hamburger-menu-button";
import style from "./sidebar.module.scss";

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuOpen() {
    setMenuOpen((prevValue: boolean) => !prevValue);
  }

  return (
    <aside className="fixed lg:relative w-full lg:w-80 lg:shrink-0 bg-white text-center lg:flex lg:flex-col lg:justify-around lg:items-center">
      <header className="h-12 flex items-center justify-between">
        <span className="p-3">MM</span>
        <HamburgerMenuButton
          className="lg:hidden"
          isEnabled={menuOpen}
          onClick={toggleMenuOpen}
        />
      </header>
      <nav className={`overflow-hidden ${style.menu} ${menuOpen ? style.menuOpen : ""}`}>
        <ul>
          <li className="p-2">Home</li>
          <li className="p-2">About</li>
          {/* <li className="p-2">Portfolio</li> */}
          <li className="p-2">Blog</li>
          <li className="p-2">Contact</li>
        </ul>
      </nav>
      <footer className="hidden lg:block">
        SOCIAL ICONS
      </footer>
    </aside>
  );
}
