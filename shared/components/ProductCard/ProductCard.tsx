import Image from "next/image";
import { Button } from "../Button/Button";

type Props ={
    item: {
        id: number;
        name: string;
        image: string;
        currentPrice: number;
    }
}

export const ProductCard: React.FC<Props> = ({item}) => {
  return (
    <>
      <article className="max-md:pb-2 shadow-card hover:shadow-cardHover rounded-[10px] flex flex-col md:gap-4 gap-2 items-center shrink-0 bg-[#fafafa] md:w-[220px] md:h-[468px] h-[320px]">
        <Image
          style={{ objectFit: "cover" }}
          alt={item.name}
          src={item.image}
          width={220}
          height={300}
          className=" w-[220px] md:h-[300px] h-[200px] rounded-t-[10px]"
        />

        <span className="text-primary text-lg font-extrabold max-md:px-2">{item.name}</span>
        <span className="text-primary text-lg font-extrabold max-md:px-2">
          {item.currentPrice} руб.
        </span>
        <Button title="Подробнее" />
      </article>
    </>
  );
};