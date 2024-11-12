"use client";

import { useVerifyEmailMutation } from "@/app/_redux/features/authApiSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EmailConfirmation({ keyValue }: { keyValue: string }) {
	const [verifyEmailMutation, { isLoading }] = useVerifyEmailMutation();
	const { replace } = useRouter();

	function verifyEmail() {
		verifyEmailMutation({token: keyValue})
			.unwrap()
			.then((ee) => {
				console.log(ee);
				toast.success(
					"Email został zweryfikowany, zaloguj się aby kontynuować"
				);
				replace("/login");
			})
			.catch((error) => {
				console.log(error);
				if (error?.data?.detail) {
					toast.error(error.data.detail);
				} else {
					toast.error("Wystąpił nieoczekiwany błąd");
				}
			});
	}

	return (
		<div className=" w-full max-w-[480px] flex justify-center items-cente px-5 py-6 sm:shadow-shadowNewBox sm:px-14 sm:py-8 bg-white rounded-md">
			<div className="flex flex-col items-center">
				<div className="w-[50px] h-[50px] relative">
					<Image
						fill
						src="/confirmEmailIcon.png"
						alt=""
						className="w-full h-full object-contain object-center"
					/>
				</div>
				<h2 className="text-lg sm:text-2xl font-semibold uppercase py-2">
					Potwierdź e-mail
				</h2>
				<p className="text-sm sm:text-base text-center mb-10">
					To już ostatni krok! Potwierdź swój adres e-mail, klikając w link,
					który właśnie do Ciebie wysłaliśmy.
				</p>
				<button
					onClick={verifyEmail}
					disabled={isLoading}
					className="w-full mb-2 shadow-shadowNewBox text-lg sm500:max-w-[250px] bg-mainGreen py-1 text-white sm:text-2xl tracking-tight rounded-full transition-all duration-300 hover:bg-mainGreenSecond">
					Potwierdź
				</button>
			</div>
		</div>
	);
}
