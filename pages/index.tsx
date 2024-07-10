import { Arimo, Bitter, Fira_Sans, Inter } from "next/font/google";
import { Author } from "@/shared/components/Author/Author";
import { AppAccordionGroup } from "@/shared/components/AppAccordionGroup/AppAccordionGroup";
import { accordeonItems, files, MetaData, reviews } from "@/shared/static";
import { ReviewsBlock } from "@/shared/components/ReviewsBlock/ReviewsBlock";
import { Contacts } from "@/shared/components/Contacts/Contacts";
import { AppHead } from "@/shared/components/AppHead";
import { ImageGallery } from "@/shared/components/ImageGallery";

const inter = Bitter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <AppHead title={MetaData.title} description={MetaData.description} />

      <div className={`flex flex-col justify-between ${inter.className}`}>
        <Author />
        <div className="md:mt-[60px] mt-8">
          <AppAccordionGroup
            className="container"
            items={accordeonItems}
            accordionContentSlot={(item) => (
              <ul>
                {item.value.map((value) => (
                  <li key={value}>
                    <div dangerouslySetInnerHTML={{ __html: value ?? "" }} />
                  </li>
                ))}
              </ul>
            )}
          />
        </div>
        <div id="gallery" className="mt-[60px]">
          <ImageGallery items={files} className="py-0 pt-4" />
        </div>
        <div id="contacts" className="mt-[60px]">
          <Contacts />
        </div>
      </div>
    </>
  );
}
