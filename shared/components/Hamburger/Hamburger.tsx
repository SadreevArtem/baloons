import React from "react";
import { createPortal } from "react-dom";
import { HamburgerMenu } from "../HamburgerMenu";
import { HeaderMenuItem } from "./static";
import { inter } from "@/pages";


type Props = {
  menu: HeaderMenuItem[];
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
  className?: string;
};

export const Hamburger: React.FC<Props> = ({
  menu,
  active,
  onOpen,
  onClose,
  className = "string"
}) => {
  const onToggle = () => (active ? onClose() : onOpen());

  return (
    <>
      {/* <HamburgerButton className={className} active={active} onClick={onToggle} /> */}
      <button onClick={onToggle} className="flex flex-col gap-1 ">
        <div className="bg-[#9d8c98] w-[22px] h-[2px]" />
        <div className="bg-[#9d8c98] w-[22px] h-[2px]" />
        <div className="bg-[#9d8c98] w-[22px] h-[2px]" />
      </button>
      {active &&
        createPortal(
          <HamburgerMenu className={`${inter.className} "md:hidden"`} menu={menu} onClose={onClose} />,
          document.body
        )}
    </>
  );
};
