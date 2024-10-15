/* eslint-disable @next/next/no-img-element */

"use client";

import { useRegister } from "@/app/_hooks/useRegister";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { GoLock } from "react-icons/go";
import InputBox from "../ui/InputBox";
import Spinner from "../ui/Spinner";

export default function CreateNewPassword() {
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
		<div className=" w-full max-w-[480px] flex justify-center items-cente px-5 py-6 sm:shadow-shadowNewBox sm:px-14 sm:py-8 bg-white rounded-md">
			<div className="flex flex-col items-center">
				<p>ikonka bedzie</p>
				<h2 className="text-lg sm:text-2xl font-semibold uppercase py-2">
					Utwórz nowe hasło
				</h2>
				<p className="text-sm sm:text-base text-center mb-10">
					Wprowadź nowe hasło, aby odzyskać dostęp do swojego konta. Pamiętaj,
					aby hasło było silne.
				</p>
				<InputBox
					id="password"
					type="text"
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
					type="text"
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
				<button className="w-full mb-2 mt-16 shadow-shadowNewBox text-lg sm500:max-w-[250px] bg-mainGreen py-1 text-white sm:text-2xl tracking-tight rounded-full transition-all duration-300 hover:bg-mainGreenSecond">
					Zmień hasło
				</button>
			</div>
		</div>
	);
}

