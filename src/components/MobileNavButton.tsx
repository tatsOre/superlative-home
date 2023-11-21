'use client';

import React from "react";
import clsx from "clsx";

export default function MobileMenuButton({ open, onClick, ...rest }) {
  return (
    <button
      className="mobile--menu-button"
      aria-label={open ? "close menu" : "open menu"}
      aria-haspopup="true"
      aria-expanded={open}
      onClick={onClick}
      {...rest}
    >
      <span className={clsx(["bar", open && "animate"])}></span>
    </button>
  );
}
