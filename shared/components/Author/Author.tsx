import clsx from "clsx";
import Image from "next/image";

export const Author = () => {
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
          <div
            className={clsx(
              "max-md:hidden"
            )}
          >
            <Image
              width={560}
              height={750}
              src="/images/banner.jpg"
              alt="лестница"
              className="w-full"
            />
          </div>
        </div>
    </div>
  );
};
