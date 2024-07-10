import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrolltoHash } from "@/shared/lib";
import { AppIcon } from "../AppIcon";

export const Header: React.FC = () => {
  return (
    <header className={"md:mt-6 mt-2"}>
      <div
        className={
          "container flex items-center justify-between min-h-6 max-md:hidden"
        }
      >
        <Link href="/" className="relative block w-[60px] h-[60px] shrink-0">
          <Image
            src="/logo.jpg"
            fill
            alt="Логотип"
            className="w-[140px] h-[140px]"
          />
        </Link>
        <nav className="flex items-center gap-4">
          <ul className="flex gap-4">
            <li>
              <div
                className="header-link"
                onClick={() => scrolltoHash("price")}
              >
                О НАС
              </div>
            </li>
            <li>
              <div
                className="header-link"
                onClick={() => scrolltoHash("gallery")}
              >
                ГАЛЕРЕЯ
              </div>
            </li>
            <li>
              <div
                className="header-link"
                onClick={() => scrolltoHash("contacts")}
              >
                КОНТАКТЫ
              </div>
            </li>
            <li>
              <Link
                href={`tel:+79829895209`}
                className="w-fit bg-[#bda070] p-3 rounded-[32px] border-primary"
              >
                <AppIcon type="phone" className="inline pr-2 w-6 h-6" />
                +7 (982) 989 52 09
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="md:hidden flex items-center flex-col text-lg gap-4 w-full">
        <p className="block">{'МПК "Русь"'}</p>
        <Link
          href={`tel:+79829895209`}
          className="w-fit bg-[#bda070] p-3 rounded-[32px] border-primary"
        >
          <AppIcon type="phone" className="inline pr-2 w-8 h-8" />
          {"+7 (982) 989 52 09"}
        </Link>
      </div>
      <div className="w-full h-[2px] bg-gray-200 my-2 md:my-6 opacity-50" />
    </header>
  );
};
