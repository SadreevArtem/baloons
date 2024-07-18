import React from "react";
import Link from "next/link";
import { scrolltoHash } from "@/shared/lib";
import { AppIcon } from "../AppIcon";
import { inter } from "@/pages";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

export const Header: React.FC = () => {
  return (
    <header
      className={`${inter.className} opacity-75 md:p-4 p-2 header-scroll fixed top-0 z-10 bg-white w-full`}
    >
      <div
        className={
          "container flex items-center justify-between min-h-6"
        }
      >
        <Link href="/" className="relative block shrink-0">
          <div className="flex flex-col items-center">
            <span className="md:text-2xl text-xl text-primary font-extrabold">
              Barballs72
            </span>
            <span className="md:text-[10px] text-[8px] text-primary uppercase">
              студия воздушного декора
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-4">
          <ul className="flex md:gap-4 gap-2">
            <li>
              <div
                className="header-link"
                onClick={() => scrolltoHash("price")}
              >
                <AppIcon type="search" />
              </div>
            </li>
            <li>
              <div
                className="header-link"
                onClick={() => scrolltoHash("gallery")}
              >
                <AppIcon type="favorite" />
              </div>
            </li>
            <li>
              <div
                className="header-link"
                onClick={() => scrolltoHash("contacts")}
              >
                <AppIcon type="cart" />
              </div>
            </li>
            <li className={`self-center ml-6 ${inter.className} max-md:hidden`}>
              <Menu>
                <MenuButton className="flex items-center rounded-md shadow-inner shadow-white/10 focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white">
                  <div className="flex flex-col gap-1 ">
                    <div className="bg-[#9d8c98] w-[22px] h-[2px]" />
                    <div className="bg-[#9d8c98] w-[22px] h-[2px]" />
                    <div className="bg-[#9d8c98] w-[22px] h-[2px]" />
                  </div>
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className="w-55 mt-10 origin-top-right rounded-xl border border-white/5 opacity-75 bg-bgColor p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 text-primary"
                >
                  <MenuItem>
                    <button
                      className={`group text-lg flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" ${inter.className}`}
                    >
                      Главная
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      className={`group text-lg flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" ${inter.className}`}
                    >
                      О нас
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      className={`group text-lg flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" ${inter.className}`}
                    >
                      Акции и скидки
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      className={`group text-lg flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10" ${inter.className}`}
                    >
                      Доставка и оплата
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
