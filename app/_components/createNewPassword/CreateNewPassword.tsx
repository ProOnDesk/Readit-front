/* eslint-disable @next/next/no-img-element */

"use client";

import { useConfirmPasswordMutation } from "@/app/_redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GoLock } from "react-icons/go";
import InputBox from "../ui/InputBox";

export default function CreateNewPassword({
  recoveryKey,
}: {
  recoveryKey: string;
}) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>();
  const [recoveryAccount] = useConfirmPasswordMutation();
  const { replace } = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    console.log(recoveryKey);

    recoveryAccount({
      key: recoveryKey,
      password: data.password,
    })
      .unwrap()
      .then(() => {
        toast.success("Hasło zostało zresetowane, możesz już się zalogować.");
        replace("/login");
      })
      .catch((err) => {
        if (err.data?.detail) {
          toast.error(err.data.detail);
        } else {
          toast.error("Coś poszło nie tak, spróbuj ponownie później.");
        }
      });
  };

  return (
    <div className=" w-full max-w-[480px] flex justify-center items-cente px-5 py-6 sm:shadow-shadowNewBox sm:px-14 sm:py-8 bg-white rounded-md">
      <div className="flex flex-col items-center">
        <img
          src="./confirmEmailIcon.png"
          alt=""
          className="w-[50px] h-[50px]"
        />
        <h2 className="text-lg sm:text-2xl font-semibold uppercase py-2">
          Utwórz nowe hasło
        </h2>
        <p className="text-sm sm:text-base text-center mb-10">
          Wprowadź nowe hasło, aby odzyskać dostęp do swojego konta. Pamiętaj,
          aby hasło było silne.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-center items-center gap-4"
        >
          <InputBox
            id="password"
            type="password"
            label="Wprowadź nowe hasło..."
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
            label="Powtórz Hasło..."
            error={errors?.repeatPassword?.message}
            register={register}
            validateFunction={() => {
              if (getValues().password !== getValues().repeatPassword)
                return "Hasła nie są identyczne";
              else return true;
            }}
            icon={<GoLock size={20} />}
          />
          <button className="w-full mb-16 mt-4 shadow-shadowNewBox text-lg sm500:max-w-[250px] bg-mainGreen py-1 text-white sm:text-2xl tracking-tight rounded-full transition-all duration-300 hover:bg-mainGreenSecond">
            Zmień hasło
          </button>
        </form>
      </div>
    </div>
  );
}
