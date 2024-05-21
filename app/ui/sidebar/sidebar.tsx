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
          <Link href="/">
            <li className="p-2 tracking-wider hover:text-[#84c0f6]">Home</li>
          </Link>
          <Link href="/about">
            <li className="p-2 tracking-wider hover:text-[#84c0f6]">About</li>
          </Link>
          <Link href="/blog">
            <li className="p-2 tracking-wider hover:text-[#84c0f6]">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="p-2 tracking-wider hover:text-[#84c0f6]">Contact</li>
          </Link>
        </ul>
      </nav>
      <Footer />
    </aside>
  );
}
