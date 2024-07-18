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
      <article className="shadow-card hover:shadow-cardHover rounded-[10px] flex flex-col gap-4 items-center shrink-0 bg-[#fafafa] md:w-[220px] md:h-[468px]">
        <Image
          style={{ objectFit: "cover" }}
          alt={item.name}
          src={item.image}
          width={220}
          height={300}
          className=" w-[220px] h-[300px] rounded-t-[10px]"
        />

        <span className="text-primary text-lg font-extrabold">{item.name}</span>
        <span className="text-primary text-lg font-extrabold">
          {item.currentPrice} руб.
        </span>
        <Button title="Подробнее" />
      </article>
    </>
  );
};