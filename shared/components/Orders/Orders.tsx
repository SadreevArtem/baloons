import { api } from "@/shared/api/api";
import { useQuery } from "@tanstack/react-query";
import { Order } from "../Cart";
import { useAuthStore } from "@/shared/stores/auth";




export const Orders: React.FC = () => {
const token = useAuthStore((state) => state.token);
   const getOrders = () => api.getOrders(token);
   const {data: orders = [], isLoading} = useQuery<Order[]>({queryKey:['order'], queryFn: getOrders});
   console.log(orders);
   

  return (
    <section className="flex flex-col w-full">
      <div className="flex mb-2"></div>
      {!isLoading ? (
        <div className="mt-2">
          <ul className="flex flex-col gap-2 bg-gray-200 rounded-2 p-3">
            {orders?.map((item) => (
              <li key={item.id} className="flex gap-2">
                <span className="block">{item.name}</span>
                <span className="block">{item.phone}</span>
                <span className="block">{item.adress}</span>
                <span className="block">{item.comment}</span>
                <span className="block">{item.createdAt.slice(0, 10)}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Загрузка...</div>
      )}
    </section>
  );
};