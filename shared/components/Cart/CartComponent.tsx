import React from "react";
import { inter } from "@/pages";
import { PRODUCTS } from "@/shared/static";
import { CartItem } from "./components/CartItem";

type Props = {
  title: string;
  className?: string;
}


export const CartComponent: React.FC<Props> = ({title, className}) => {
  return (
    <>
      <section className={`w-full flex flex-col py-4 ${inter.className, className} bg-[#f7f7f7]`}>
        <h3 className="container self-center text-center text-primary md:text-5xl text-2xl font-extrabold mb-6">{title}</h3>
        <div className="container py-4 flex flex-col md:gap-6 gap-4">
            {PRODUCTS.map((product)=> <CartItem item={product} key={product.name}/>)}
        </div>
      </section>
    </>
  );
};
