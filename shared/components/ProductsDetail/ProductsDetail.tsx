import { api } from "@/shared/api/api";
import { Product } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";


type Props = {
  id: number;
}


export const ProductsDetail: React.FC<Props> = ({id}) => {
    const getProductById = () => api.getProductById(id);
    const getQueryKey = (id: number) => ['product'].concat(id.toString());
   const { data: product, isLoading } = useQuery<Product>({
     queryKey: getQueryKey(id),
     queryFn: getProductById,
     enabled: !!id,
   });
   console.log(product);
  return (
 
      <section className="">
        {id}
      </section>

  );
};
