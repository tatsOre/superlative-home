'use client';

import React from "react";
import clsx from "clsx";

interface MobileMenuButtonProps {
  open: boolean;
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  open, onClick, ...rest
}) => {
  const buttonLabel = open ? "close" : "open";

  return (
    <button
      className="nav--button-mobile"
      aria-controls="navbar-mobile"
      aria-haspopup="true"
      aria-expanded={open}
      onClick={onClick}
      {...rest}
    >
      <span className="sr-only">{buttonLabel} main menu</span>
      <span className={clsx("bar", { animate: open })}></span>
    </button>
  );
};

export default MobileMenuButton;
