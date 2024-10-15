/* eslint-disable @next/next/no-img-element */

"use client";

import Link from "next/link";
import InputBox from "../ui/InputBox";
import { MdOutlineEmail } from "react-icons/md";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRegister } from "@/app/_hooks/useRegister";

export default function PasswordRecovery() {
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
		<div className=" w-full max-w-[480px] flex flex-col justify-center items-cente  py-6 sm:shadow-shadowNewBox sm:py-8 bg-white rounded-md">
			<div className="flex flex-col items-center px-5 sm:px-16">
				<img src="/recovery.svg" alt="" width={50} height={50} />
				<h2 className="text-lg sm:text-2xl font-semibold  py-2">
					Resetowanie hasła
				</h2>
				<p className="text-sm sm:text-base text-center mb-10">
					Wprowadź swój adre e-mail, a my wyślemy Ci link, który umożliwi
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
				<button className="w-full mb-2 mt-6 shadow-shadowNewBox text-lg sm500:max-w-[250px] bg-mainGreen py-1 text-white sm:text-2xl tracking-tight rounded-full transition-all duration-300 hover:bg-mainGreenSecond">
					Wyślij
				</button>
				<Link
					href="/"
					className="text-xs sm:text-sm text-center mb-16 mt-3 hover:text-mainGreenSecond transition-all duration-300">
					Nie możesz zresetować hasła?
				</Link>
			</div>
			<Link
				href="/"
				className="pt-6 border-whiteSecond border-t-2  text-base sm:text-lg text-center px-5 w-full hover:text-blackSecond transition-all duration-300">
				Powrót do logowania{" "}
			</Link>
		</div>
	);
}
