"use client";

import { useState } from "react";
import { HamburgerMenuButton } from "../hamburger-menu/hamburger-menu-button";
import style from "./sidebar.module.scss";
import { Logo } from "../logo/logo";
import { Footer } from "../footer/footer";
import Link from "next/link";

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuOpen() {
    setMenuOpen((prevValue: boolean) => !prevValue);
  }

  return (
    <aside className="fixed lg:border-r lg:border-slate-200 lg:relative w-full lg:w-80 lg:shrink-0 bg-white text-center lg:flex lg:flex-col lg:justify-around lg:items-center">
      <header className="h-12 flex items-center justify-between">
        <Logo />
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
          <li className="p-2 tracking-wider">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2 tracking-wider">
            <Link href="/about">About</Link>
          </li>
          <li className="p-2 tracking-wider">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="p-2 tracking-wider">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Footer />
    </aside>
  );
}
