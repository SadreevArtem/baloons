import Image from "next/image";

type Props ={
    item: {
        id: number;
        name: string;
        image: string;
    }
}

export const CategoryItem: React.FC<Props> = ({item}) => {
  return (
    <>
      <article className="flex flex-col gap-4 items-center shrink-0">
        <div className="">
            <Image style={{objectFit: "cover"}} alt={item.name} src={item.image} width={145} height={145} className=" rounded-[50%] md:w-[145px] md:h-[145px] w-[100px] h-[100px]"/>
        </div>
        <span className="text-primary md:text-xl text-lg font-extrabold">{item.name}</span>
      </article>
    </>
  );
};