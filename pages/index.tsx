import { Poiret_One } from "next/font/google";
import { Author } from "@/shared/components/Author/Author";
import { MetaData, reviews } from "@/shared/static";
// import { ReviewsBlock } from "@/shared/components/ReviewsBlock/ReviewsBlock";
import { AppHead } from "@/shared/components/AppHead";
import { ReviewsBlock } from "@/shared/components/ReviewsBlock/ReviewsBlock";
import { Categories } from "@/shared/components/Categories";
import { Selections } from "@/shared/components/Selections";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

export default function Home() {
  return (
    <>
      <AppHead title={MetaData.title} description={MetaData.description} />

      <div className={`flex flex-col justify-between ${inter.className}`}>
        <Author />
        <div className="md:mt-[60px] mt-8">
          <Categories />
        </div>
        <div className="md:mt-[60px] mt-8">
          <Selections />
        </div>
        <div id="contacts" className="mt-[60px]">
          <ReviewsBlock items={reviews} />
        </div>
      </div>
    </>
  );
}
