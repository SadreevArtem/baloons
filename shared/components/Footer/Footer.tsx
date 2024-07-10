import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Socials } from "../Socials/Socials";

export const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full h-[4px] bg-white mt-4 md:mt-6 opacity-50" />
      <footer className="w-full flex flex-col  bg-[#333] py-4">
        <div className="container">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <div className="relative flex flex-col md:flex-row gap-6 items-center">
              <Link
                href="/"
                className="relative block w-[50px] h-[50px] shrink-0"
              >
                <Image
                  src="/logo.jpg"
                  fill
                  alt="Логотип"
                  className="w-[30px] h-[30px] rounded-full"
                />
              </Link>

              <h2 className="text-link">{'МПК "Русь"'}</h2>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Socials
                className=""
                socials={[
                  { id: 1, name: "social-vk", value: "/" },
                  {
                    id: 2,
                    name: "social-tg",
                    value: "/",
                  },
                  { id: 3, name: "social-youtube", value: "/" },
                  { id: 4, name: "social-ok", value: "/" },
                ]}
              />
              <Link
                href={`tel:+79829895209`}
                className="text-link w-fit hover:text-hover"
              >
                +7 (982) 989 52 09
              </Link>
              <p className="text-link w-fit hover:text-hover">г. Тюмень ул.Камчатская 181</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
