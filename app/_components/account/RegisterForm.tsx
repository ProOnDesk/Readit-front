"use client";

import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import InputBox from "../ui/InputBox";
import { FaRegUser } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import Link from "next/link";
import { GoLock } from "react-icons/go";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <h4 className="text-2xl ">Zarejestruj</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <InputBox
          id="name"
          type="text"
          label="Imię"
          error={errors?.name?.message}
          register={register}
          icon={<LuPencilLine size={20} />}
        />
        <InputBox
          id="surname"
          type="text"
          label="Nazwisko"
          error={errors?.surname?.message}
          register={register}
          icon={<LuPencilLine size={20} />}
        />
        <InputBox
          id="email"
          type="email"
          label="Email"
          error={errors?.email?.message}
          register={register}
          validateFunction={() => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(getValues().email)) return "Incorrect e-mail";
            else return true;
          }}
          icon={<FaRegUser size={20} />}
        />
        <InputBox
          id="password"
          type="password"
          label="Password"
          error={errors?.password?.message}
          register={register}
          validateFunction={() => {
            const passwordRegex = /^.{8,}$/;
            if (!passwordRegex.test(getValues().password))
              return "Incorrect password (min. 8 letters)";
            else return true;
          }}
          icon={<GoLock size={20} />}
        />
        <div className="mb-6">
          <InputBox
            id="repeatPassword"
            type="password"
            label="Repeat Password"
            error={errors?.repeatPassword?.message}
            register={register}
            validateFunction={() => {
              if (getValues().password !== getValues().repeatPassword)
                return "Passwords don't match";
              else return true;
            }}
            icon={<GoLock size={20} />}
          />
        </div>
        <button className="w-full bg-mainGreen py-2 text-white uppercase tracking-widest font-medium rounded-full transition-all duration-300">
          Zarejestruj
        </button>
      </form>
      <p className="text-sm mt-2">
        Masz już konto?
        <span className="ml-1">
          <Link
            href="/login"
            className="text-sm hover:text-mainGreen transition-colors duration-300 underlined hover:before:bg-mainGreen"
          >
            Zaloguj
          </Link>
        </span>
      </p>
    </div>
  );
}
