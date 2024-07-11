import React from "react";

import { inter } from "@/pages";
import { PRODUCTS } from "@/shared/static";
import { ProductCard } from "../ProductCard/ProductCard";


export const Selections: React.FC = () => {
  return (
    <>
      <section className={`w-full flex flex-col py-4 ${inter.className} bg-[#f7f7f7]`}>
        <h3 className="self-center text-primary text-5xl font-extrabold mb-6">Вам точно понравится</h3>
        <div className="container py-4 grid grid-cols-4 gap-8">
            {PRODUCTS.map((product)=> <ProductCard item={product} key={product.name}/>)}
        </div>
      </section>
    </>
  );
};
