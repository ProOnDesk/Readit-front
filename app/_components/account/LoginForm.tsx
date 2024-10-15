"use client";

import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import InputBox from "../ui/InputBox";
import { MdOutlineEmail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import Link from "next/link";
import { useLogin } from "@/app/_hooks/useLogin";
import Spinner from "../ui/Spinner";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>();
  const { loginHookFn, isLoading } = useLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    loginHookFn({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="w-full max-w-[480px] sm:shadow-lg sm:px-14 sm:py-12 bg-white rounded-md">
      <h4 className="text-3xl font-medium mb-5">Zaloguj</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col justify-center items-center gap-3"
      >
        <InputBox
          id="email"
          type="email"
          label="Email"
          error={errors?.email?.message}
          register={register}
          validateFunction={() => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(getValues().email))
              return "Niepoprawny e-mail";
            else return true;
          }}
          icon={<MdOutlineEmail size={20} />}
        />
        <div className="mb-4 w-full">
          <InputBox
            id="password"
            type="password"
            label="Hasło"
            error={errors?.password?.message}
            register={register}
            icon={<GoLock size={20} />}
          />
          <p className="text-sm text-end text-gray-500">
            <Link
              href="/password-recovery"
              className="text-sm hover:text-mainGreen transition-colors duration-300 under lined hover:before:bg-mainGreen"
            >
              Nie pamiętam hasła
            </Link>
          </p>
        </div>
        <button
          className="w-full sm500:max-w-[250px] bg-mainGreen py-2 text-white uppercase tracking-widest font-medium rounded-full transition-all duration-300 hover:bg-mainGreenSecond"
          disabled={isLoading}
        >
          {!isLoading ? "Zaloguj" : <Spinner />}
        </button>
      </form>
      <p className="text-sm mt-2 sm500:text-center sm500:mt-5">
        Nie masz jeszcze konta?
        <span className="ml-1">
          <Link
            href="/register"
            className="text-sm hover:text-mainGreen transition-colors duration-300 underlined hover:before:bg-mainGreen"
          >
            Zarejestruj
          </Link>
        </span>
      </p>
    </div>
  );
}
