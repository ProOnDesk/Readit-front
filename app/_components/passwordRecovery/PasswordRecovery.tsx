/* eslint-disable @next/next/no-img-element */

"use client";

import Link from "next/link";
import InputBox from "../ui/InputBox";
import { MdOutlineEmail } from "react-icons/md";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useResetPasswordMutation } from "@/app/_redux/features/authApiSlice";
import toast from "react-hot-toast";

export default function PasswordRecovery() {
  const [passwordRecovery, { isLoading }] = useResetPasswordMutation();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    passwordRecovery({ email: data.email })
      .unwrap()
      .then(() => {
        toast.success(
          "Postępuj zgodnie z instrukcjami wysłanymi na podany adres email"
        );
      })
      .catch((error) => {
        console.log(error);
        if (error?.data?.detail) {
          toast.error(error.data.detail);
        } else {
          toast.error("Wystąpił nieoczekiwany błąd");
        }
      });
  };

  return (
    <div className=" w-full max-w-[480px] flex flex-col justify-center items-cente  py-6 sm:shadow-shadowNewBox sm:py-8 bg-white rounded-md">
      <form
        className="flex flex-col items-center px-5 sm:px-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <img src="/recovery.svg" alt="" width={50} height={50} />
        <h2 className="text-lg sm:text-2xl font-semibold  py-2">
          Resetowanie hasła
        </h2>
        <p className="text-sm sm:text-base text-center mb-10">
          Wprowadź swój adres e-mail, a my wyślemy Ci link, który umożliwi
          odyskanie dostępu do konta
        </p>
        <InputBox
          id="email"
          type="email"
          label="Podaj e-mail"
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
        <button
          disabled={isLoading}
          className="w-full mb-2 mt-6 shadow-shadowNewBox text-lg sm500:max-w-[250px] bg-mainGreen py-1 text-white sm:text-2xl tracking-tight rounded-full transition-all duration-300 hover:bg-mainGreenSecond"
        >
          Wyślij
        </button>
        <Link
          href="/help"
          className="text-xs sm:text-sm text-center mb-16 mt-3 hover:text-mainGreenSecond transition-all duration-300"
        >
          Nie możesz zresetować hasła?
        </Link>
      </form>
      <Link
        href="/login"
        className="pt-6 border-whiteSecond border-t-2  text-base sm:text-lg text-center px-5 w-full hover:text-blackSecond transition-all duration-300"
      >
        Powrót do logowania{" "}
      </Link>
    </div>
  );
}
