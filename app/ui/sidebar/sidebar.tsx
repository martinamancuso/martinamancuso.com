import { useState } from "react";
import { HamburgerMenuButton } from "../hamburger-menu/hamburger-menu-button";
import style from "./sidebar.module.scss";

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuOpen() {
    setMenuOpen((prevValue: boolean) => !prevValue);
  }

  return (
    <aside className="fixed lg:relative w-full lg:w-80 lg:shrink-0 bg-white text-center">
      <header className="h-12 flex items-center justify-between">
        <span className="p-3">MM</span>
        <HamburgerMenuButton className="lg:hidden" isEnabled={menuOpen} onClick={toggleMenuOpen} />
      </header>
      <nav className={`${style.menu} ${menuOpen ? style.menuOpen : ""}`}>
        <ul>
          <li className="p-2">home</li>
          <li className="p-2">about</li>
          <li className="p-2">portfolio</li>
          <li className="p-2">blog</li>
          <li className="p-2">contact</li>
        </ul>
      </nav>
    </aside>
  );
}
