import clsx from "clsx";
import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

type BannerProps = {
  images: {url: string}[];
};

export const Author: FC<BannerProps> = ({ images }) => {

  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const activeBanner = images[activeBannerIndex];
  const imageRef = useRef<HTMLImageElement>(null);

  const onNextBannerIndex = useCallback(() => {
    setActiveBannerIndex((prevState: number) => (prevState === images.length - 1 ? 0 : prevState + 1));
  }, [setActiveBannerIndex, images]);

  useEffect(() => {
    const intervalId = setInterval(onNextBannerIndex, 5000);
    return () => clearInterval(intervalId);
  }, [onNextBannerIndex]);

  return (
    <div className="relative w-full">
      <div className="flex justify-center items-start">
        {/* <div
            className={clsx(
              "relative shadow-lg md:hidden"
            )}
          >
            <Image
              width={560}
              height={750}
              src="/images/banner.jpg"
              alt="красивые воздушные шарики"
              className="top-0 left-0 right-0 bottom-0"
            />
          </div> */}
        <div className="h-[60vh]">
          <SwitchTransition mode="in-out">
            <CSSTransition
              nodeRef={imageRef}
              key={activeBannerIndex}
              timeout={1000}
              className="transition-opacity duration-1000 object-cover"
              classNames={{
                enter: "opacity-0",
                enterActive: "opacity-100",
                exit: "opacity-100",
                exitActive: "opacity-0",
              }}
            >
              <Image
                ref={imageRef}
                src={activeBanner?.url ?? ""}
                alt=""
                fill
                className="w-full"
                priority={true}
                quality={95}
                // sizes='(min-width: 1280px) 150vw, (min-width: 768px) 200vw, 600vw'
              />
            </CSSTransition>
          </SwitchTransition>
        </div>
        {/* <div className={clsx("max-md:hidden")}>
          <Image
            width={560}
            height={750}
            src="/images/banner.jpg"
            alt="шарики"
            className="w-full"
          />
        </div> */}
      </div>
    </div>
  );
};
