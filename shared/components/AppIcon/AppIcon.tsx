import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import { IconType } from "./types";
import clsx from "clsx";


const SocialVk = dynamic(() => import("./components/SocialVk").then((module) => module.SocialVk), {
  ssr: false
});
const SocialTg = dynamic(() => import("./components/SocialTg").then((module) => module.SocialTg), {
  ssr: false
});
const SocialOk = dynamic(() => import("./components/SocialOk").then((module) => module.SocialOk), {
  ssr: false
});
const SocialYoutube = dynamic(
  () =>
    import("./components/SocialYoutube").then((module) => module.SocialYoutube),
  {
    ssr: false,
  }
);
const StarFilled = dynamic(
  () => import("./components/StarFilled").then((module) => module.StarFilled),
  {
    ssr: false
  }
);

const Close = dynamic(() => import("./components/Close").then((module) => module.Close), {
  ssr: false
});
const Phone = dynamic(() => import("./components/Phone").then((module) => module.Phone), {
  ssr: false
});
const ChevronRight = dynamic(
  () => import("./components/ChevronRight").then((module) => module.ChevronRight),
  {
    ssr: false
  }
);

type Props = {
  type: IconType;
  className?: string;
};

const icons: Record<IconType, (className: string) => ReactNode> = {

  "social-vk": (className) => <SocialVk className={className} />,
  "social-ok": (className) => <SocialOk className={className} />,
  "social-tg": (className) => <SocialTg className={className} />,
  "social-youtube": (className) => <SocialYoutube className={className} />,
  "star-filled": (className) => <StarFilled className={className} />,
  close: (className) => <Close className={className} />,
  phone: (className) => <Phone className={className} />,
  "chevron-right": (className) => <ChevronRight className={className} />,
  
};

export const AppIcon: React.FC<Props> = ({ type, className = "" }) => {
  return <>{icons[type](clsx(className, "shrink-0"))}</>;
};
