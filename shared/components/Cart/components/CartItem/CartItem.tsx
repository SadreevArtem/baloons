import Image from "next/image";
import { NumericInput } from "../NumericInput";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


type Props ={
    item: {
        id: number;
        name: string;
        image: string;
        currentPrice: number;
    }
}

export const CartItem: React.FC<Props> = ({item}) => {
  return (
    <>
      <article className="p-5 shadow-card hover:shadow-cardHover rounded-[10px] flex md:gap-12 gap-2 items-center shrink-0 bg-[#fafafa] w-full md:h-[140px] h-[140px]">
        <Image
          style={{ objectFit: "cover" }}
          alt={item.name}
          src={item.image}
          width={100}
          height={100}
          className=" w-[100px] md:h-[100px] h-[100px] rounded-[10px]"
        />
        <div className="flex max-md:flex-col justify-between w-full">
          <div className="max-md:text-center self-center">
            <span className="text-primary text-lg font-extrabold max-md:px-2">
              {item.name}
            </span>
          </div>

          <div className="flex md:gap-36 items-center max-md:flex-col">
            <div className="max-md:scale-75">
              <NumericInput min={1}  />
            </div>
            <span className="text-primary text-lg font-extrabold max-md:px-2">
              {item.currentPrice} руб.
            </span>
            <button className="max-md:absolute right-8">
              <DeleteForeverIcon color="warning" />
            </button>
          </div>
        </div>
      </article>
    </>
  );
};