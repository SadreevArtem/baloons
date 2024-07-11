import clsx from "clsx";

type Props = {
  title: string;
  className?: string;
};

export const Button: React.FC<Props> = ({title, className=""})=> {
    return (
        <button className={clsx("bg-[#d1baba] h-[35px] rounded-2 w-[100px] text-white", className)}>
            {title}
        </button>
    )
};

