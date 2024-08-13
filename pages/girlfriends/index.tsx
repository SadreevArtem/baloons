import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";;
import { ReactElement } from "react";
import { BaseLayout } from "@/layouts/BaseLayout/BaseLayout";
import { PageProducts } from "@/shared/components/PageProducts/PageProducts";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

const Girlfriends = () => {
  return (
    <>
      <AppHead title="Девушке" description="" />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-4">
          <PageProducts title="Для девушки" category="girlfriend" className="md:mt-[60px] mt-[46px]" />
        </div>
      </div>
    </>
  );
};

Girlfriends.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}


export default Girlfriends;