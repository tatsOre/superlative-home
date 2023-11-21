'use client';

import React from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileNavButton from "./MobileNavButton";

export default function Header() {
  const [openNavigation, setOpenNavigation] = React.useState(false);

  const handleNavigationToggle = () => { setOpenNavigation(prev => !prev) };

  return (
    <header className='container flex flex-wrap'>
      <MobileNavButton open={openNavigation} onClick={handleNavigationToggle} />
      <Navigation />
      <LocaleSwitcher />
    </header>
  );
}
