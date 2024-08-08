import React from "react";
import { inter } from "@/pages";
import { PRODUCTS } from "@/shared/static";
import { CartItem } from "./components/CartItem";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { AppPhoneInputMasked } from "../AppPhoneInputMasked";
import { getMaskedPhoneValidation } from "@/shared/lib";
import { AppTextField } from "../AppTextField";

type Props = {
  title: string;
  className?: string;
}

type Inputs = {
  name: string;
  phone: string;
  adress: string;
  comment: string;
}


export const CartComponent: React.FC<Props> = ({title, className}) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("phone")) // watch input value by passing the name of it
  return (
    <>
      <section
        className={`w-full flex flex-col py-4 ${
          (inter.className, className)
        } bg-[#f7f7f7]`}
      >
        <h3 className="container self-center text-center text-primary md:text-5xl text-2xl font-extrabold mb-6">
          {title}
        </h3>
        <div className="container flex max-md:flex-col w-full md:gap-8">
          <div className=" py-4 flex flex-col md:gap-6 gap-4">
            {PRODUCTS.map((product) => (
              <CartItem item={product} key={product.name} />
            ))}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-[30%] py-4 flex flex-col md:gap-6 gap-4"
          >
            <h4 className="text-primary text-xl font-semibold">
             Информация о заказе
            </h4>
            <AppTextField tag="input" label="Имя" {...register("name")} />
            <Controller
              name="phone"
              control={control}
              rules={getMaskedPhoneValidation({ required: true })}
              render={({ field: { value, onChange } }) => {
                return (
                  <AppPhoneInputMasked
                    className="w-full"
                    required
                    inputClassName="w-full"
                    value={value}
                    // disabled={isLoading}
                    onChange={onChange}
                    label="Номер телефона"
                    // error={getError("phone")}
                  />
                );
              }}
            />
            <AppTextField tag="input" label="Адрес" {...register("adress")} />
            <AppTextField
              tag="textarea"
              label="Коментарий"
              {...register("comment")}
            />
            <input
              type="submit"
              className="bg-[#d1baba] text-lg px-4 h-[42px] rounded-2 text-white self-center"
            />
          </form>
        </div>
      </section>
    </>
  );
};
