import clsx from "clsx";
import Image from "next/image";

export const Author = () => {
  return (
    <div className="container">
      <div className="flex justify-end relative max-md:flex-col">
        <div className="flex relative justify-center items-start border-8 border-[#f9deaf]">
          <div
            className={clsx(
              "relative md:top-[30px] md:right-[-30px] top-[25px] right-[-25px] shadow-lg md:hidden"
            )}
          >
            <Image
              width={560}
              height={750}
              src="/stairsA.jpg"
              alt="лестница"
              className="top-0 left-0 right-0 bottom-0"
            />
          </div>
          <div
            className={clsx(
              "relative md:top-[30px] md:right-[-30px] top-[25px] right-[-25px] shadow-lg max-md:hidden"
            )}
          >
            <Image
              width={560}
              height={750}
              src="/stairsA.jpg"
              alt="лестница"
              className="top-0 left-0 right-0 bottom-0"
            />
          </div>
        </div>
        <div className="w-[50%] ml-[60px] pt-[100px] max-md:pt-[45px] max-md:ml-[20px] max-md:w-full">
          <h1 className="md:text-[60px] max-md:text-xl max-md:mb-2">
            Изготовление лестниц
          </h1>
          <ul className="list-disc pl-4 text-xl flex flex-col gap-2 max-md:text-base w-full">
            <li>
              <h2>мapшевыx</h2>
            </li>
            <li>
              <h3>пoвopoтныx Г-обpазныx</h3>
            </li>
            <li>
              <h4>П-обpазныx лecтниц</h4>
            </li>
            <li>
              <h5>леcтницы c плoщадкой</h5>
            </li>
            <li>
              <h6>на швeллeрe</h6>
            </li>
            <li>нa кocoуpе</li>
            <li>винтовые леcтницы</li>
            <li>{"лeстницы 'гусиный шаг'"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
