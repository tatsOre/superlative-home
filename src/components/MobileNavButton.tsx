'use client';

import React from "react";
import clsx from "clsx";

export default function MobileMenuButton({ open, onClick, ...rest }) {
  return (
    <button
      className="nav--button-mobile"
      aria-controls="navbar-mobile"
      aria-haspopup="true"
      aria-expanded={open}
      onClick={onClick}
      {...rest}
    >
      <span className="sr-only">{open ? "close" : "open"} main menu</span>
      <span className={clsx(["bar", open && "animate"])}></span>
    </button>
  );
}
