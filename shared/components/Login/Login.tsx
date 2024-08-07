import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/api/api";
import { useAuthStore } from "@/shared/stores/auth";
import Link from "next/link";


type Inputs = {
    username: string
  password: string
}


export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const auth = useAuthStore((state) => state.auth);
  const mutation = useMutation( {
    mutationFn:api.signInRequest,
    onSuccess: async (data: any) => {
      const response = await data.json();
      const token = response.access_token;
      auth(token);
    },
    onError: () => window.alert("Ошибка авторизации"),
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => mutation.mutate(data as Inputs);

  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-[30%] py-4 flex flex-col md:gap-6 gap-4"
        >
          <TextField variant="filled" label="Имя" {...register("username")} />
          <TextField
            variant="filled"
            label="Телефон"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">Обязательно для заполнения</span>
          )}
          <button
            className="bg-[#d1baba] text-lg px-4 h-[42px] rounded-2 text-white self-center"
            type="submit"
          >
            Войти
          </button>
          <Link className="text-center underline" href='/'>Вернуться на главную</Link>
        </form>
      </div>
    </>
  );
};
