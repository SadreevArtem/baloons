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
            <Image style={{objectFit: "cover"}} alt={item.name} src={item.image} width={145} height={145} className=" rounded-[50%] w-[145px] h-[145px] "/>
        </div>
        <span className="text-primary text-xl font-extrabold">{item.name}</span>
      </article>
    </>
  );
};