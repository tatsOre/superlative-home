'use client';

import clsx from "clsx";
import React from "react";
import useClickOutside from "../hooks/useClickOutside";
import Logotype from "./Logotype";
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

        <Logotype small />

        <div ref={menuRef}>
          <MobileNavButton open={openMenu} onClick={toggleMenuState} />

          <NavigationItems
            id="navbar-mobile"
            className={clsx("navbar--small", { "navbar--small-open": openMenu })}
            onClick={toggleMenuState}
          />
        </div>

      </div>
    </header>
  );
}
