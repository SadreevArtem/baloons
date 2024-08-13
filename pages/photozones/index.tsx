import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { PageProducts } from "@/shared/components/PageProducts/PageProducts";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Photozones = () => {
  return (
    <>
      <AppHead title="Фотозона" description="" />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-4">
          <PageProducts title="Фотозона" category="photozone" className="md:mt-[60px] mt-[46px]" />
        </div>
      </div>
    </>
  );
};

Photozones.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default Photozones;