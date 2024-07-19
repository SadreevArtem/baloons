import { Poiret_One } from "next/font/google";
import { AppHead } from "@/shared/components/AppHead";
import { CartComponent } from "@/shared/components/Cart";
;

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

export default function Cart() {
  return (
    <>
      <AppHead title='Корзина' description="" />
      <div className={`flex flex-col justify-between ${inter.className}`}>
        <div className="md:mt-[60px] mt-4">
          <CartComponent title="Оформление заказа" className="md:mt-[60px] mt-[46px]"/>
        </div>
      </div>
    </>
  );
}