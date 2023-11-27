'use client';

import React from "react";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationItems from "./Navigation";

export default function Header() {
  return (
    <header className="w-fit mx-auto hidden min-[920px]:block">
      <div className="rounded-full bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-950 p-px">
        <nav className="rounded-full flex h-full w-full items-center justify-center bg-zinc-950 px-7 py-1">
          <Image
            src="/logo-small.svg"
            alt='superlative software logotype'
            height={41}
            width={172}
          />
          <NavigationItems className="navbar--default"/>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
