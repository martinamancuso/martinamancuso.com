import { useState } from "react";
import { HamburgerMenuButton } from "../hamburger-menu/hamburger-menu-button";
import style from "./sidebar.module.scss";

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuOpen() {
    setMenuOpen((prevValue: boolean) => !prevValue);
  }

  return (
    <aside className="fixed w-full bg-white">
      <header className="h-12 flex items-center justify-between">
        <span>MM</span>
        <HamburgerMenuButton isEnabled={menuOpen} onClick={toggleMenuOpen} />
      </header>
      <nav className={`${style.menu} ${menuOpen ? style.menuOpen : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </aside>
  );
}
