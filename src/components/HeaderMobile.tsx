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

  React.useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openMenu]);

  const toggleMenuState = () => setOpenMenu(prev => !prev);

  const closeMenu = () => setOpenMenu(false);

  useClickOutside(menuRef, closeMenu);

  return (
    <header className='fixed z-10 w-full top-0 min-[920px]:hidden pt-6 pb-3 bg-black'>
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
