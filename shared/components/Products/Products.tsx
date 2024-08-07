import { useState } from "react";
import { Button } from "../Button";
import { Tabs } from "./components/Tabs/Tabs";
import { CategoryName } from "./static";
import { useQuery } from "react-query";
import { api } from "@/shared/api/api";
import { Product } from "@/shared/types";




export const Products: React.FC = () => {

   const [tab, setTab]= useState<CategoryName>("all");
   const getProducts = () => api.getProducts(tab);
   const {data: products, isLoading} = useQuery<Product[]>(["products", tab], getProducts, {enabled: !!tab});
   console.log(products);
   

  return (
    <section className="flex flex-col w-full">
      <div className="flex">
        <Button className="ml-auto w-auto px-3" title="Добавить новый" />
      </div>
      <Tabs setTab={setTab} currentTab={tab} />
      {!isLoading && <div className="mt-2">
        <ul>
           {products?.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>}
    </section>
  );
};