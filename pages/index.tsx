import { Poiret_One } from "next/font/google";
import { Author } from "@/shared/components/Author/Author";
import { MetaData, reviews } from "@/shared/static";
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
        <Author
          images={[
            { url: "/images/banner.jpg" },
            { url: "/images/banner2.jpg" },
          ]}
        />
        <div className="md:mt-[60px] mt-4">
          <Categories />
        </div>
        <div className="md:mt-[60px] mt-4">
          <Selections title="Вам точно понравится"/>
        </div>
        <div id="contacts" className="md:mt-[60px] mt-4">
          <ReviewsBlock items={reviews} />
        </div>
      </div>
    </>
  );
}
