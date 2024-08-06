import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { Selections } from "@/shared/components/Selections";
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Favourite = () => {
  return (
    <>
      <AppHead title="Избраное" description="" />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-4">
          <Selections title="Избраное" className="md:mt-[60px] mt-[46px]" />
        </div>
      </div>
    </>
  );
};

Favourite.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default Favourite;