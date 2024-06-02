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

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <aside className="fixed border-b border-greyBorders lg:border-r lg:relative w-full lg:w-[350px] xl:w-[450px] lg:shrink-0 bg-white text-center lg:flex lg:flex-col lg:justify-around lg:items-center">
      <header className="h-12 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
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
          {links.map((link, index) => (
            <li
              className="p-2 tracking-wider hover:text-primary"
              key={`navlink-${index}`}
            >
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Footer />
    </aside>
  );
}
