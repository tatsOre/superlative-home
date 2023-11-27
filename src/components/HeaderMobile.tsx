'use client';

import clsx from "clsx";
import React from "react";
import Image from "next/image";
import useClickOutside from "../hooks/useClickOutside";
import MobileNavButton from "./MobileNavButton";
import NavigationItems from "./Navigation";

export default function MobileHeader() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const menuRef = React.useRef();

  const toggleMenuState = () => setOpenMenu(prev => !prev);

  const closeMenu = () => setOpenMenu(false);

  useClickOutside(menuRef, closeMenu);

  return (
    <header className='relative w-full block min-[920px]:hidden'>
      <div className='container flex items-center justify-between'>
        <Image
          src="/logo-small.svg"
          alt='superlative software logotype'
          height={40}
          width={170}
        />

        <div ref={menuRef}>
          <MobileNavButton open={openMenu} onClick={toggleMenuState} />

          <NavigationItems
            id="navbar-mobile"
            className={clsx("navbar--small", openMenu && "navbar--small-open")}
            onClick={toggleMenuState}
          />
        </div>

      </div>
    </header>
  );
}
