"use client";

import { useRegister } from "@/app/_hooks/useRegister";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { GoLock } from "react-icons/go";
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { PiGenderIntersex } from "react-icons/pi";
import InputBox from "../ui/InputBox";
import Spinner from "../ui/Spinner";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>();
  const { isLoading, registerHookFn } = useRegister();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    registerHookFn({
      email: data.email,
      firstname: data.name,
      lastname: data.surname,
      password: data.password,
      sex: data.sex,
    });
  };

  return (
    <div className="w-full max-w-[480px] sm:shadow-lg sm:px-14 sm:py-8 bg-white">
      <h4 className="text-3xl font-medium mb-5">Zarejestruj</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col justify-center items-center gap-3"
      >
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
            if (!emailRegex.test(getValues().email))
              return "Niepoprawny e-mail";
            else return true;
          }}
          icon={<MdOutlineEmail size={20} />}
        />
        <InputBox
          id="password"
          type="password"
          label="Hasło"
          error={errors?.password?.message}
          register={register}
          validateFunction={() => {
            const passwordRegex =
              /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

            if (!passwordRegex.test(getValues().password))
              return "Hasło wymaga: min. 8 znaków, duża litera, cyfra oraz znak specjalny";
            else return true;
          }}
          icon={<GoLock size={20} />}
        />
        <InputBox
          id="repeatPassword"
          type="password"
          label="Powtórz Hasło"
          error={errors?.repeatPassword?.message}
          register={register}
          validateFunction={() => {
            if (getValues().password !== getValues().repeatPassword)
              return "Hasła nie są identyczne";
            else return true;
          }}
          icon={<GoLock size={20} />}
        />
        <div className="mb-4 w-full">
          <InputBox
            id="sex"
            type="text"
            label="Płeć"
            error={errors?.sex?.message}
            register={register}
            icon={<PiGenderIntersex size={20} />}
          />
        </div>
        <button
          className="w-full sm500:max-w-[250px] bg-mainGreen py-2 text-white uppercase tracking-widest font-medium rounded-full transition-all duration-300 hover:bg-mainGreenSecond"
          disabled={isLoading}
        >
          {!isLoading ? "Zarejestruj" : <Spinner />}
        </button>
      </form>
      <p className="text-sm mt-2 sm500:text-center sm500:mt-5">
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
