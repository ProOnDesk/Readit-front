/* eslint-disable @next/next/no-img-element */

"use client";

export default function EmailConfirmation({ keyValue }: { keyValue: string }) {
	function verifyEmail() {}
	console.log(keyValue); // Ten log pojawi się w przeglądarce
	return (
		<div className=" w-full max-w-[480px] flex justify-center items-cente px-5 py-6 sm:shadow-shadowNewBox sm:px-14 sm:py-8 bg-white rounded-md">
			<div className="flex flex-col items-center">
				<img src="/confirmEmailIcon.png" alt="" width={50} height={50} />
				<h2 className="text-lg sm:text-2xl font-semibold uppercase py-2">
					Potwierdź e-mail
				</h2>
				<p className="text-sm sm:text-base text-center mb-10">
					To już ostatni krok! Potwierdź swój adres e-mail, klikając w link,
					który właśnie do Ciebie wysłaliśmy.
				</p>
				<button
					onClick={verifyEmail}
					className="w-full mb-2 shadow-shadowNewBox text-lg sm500:max-w-[250px] bg-mainGreen py-1 text-white sm:text-2xl tracking-tight rounded-full transition-all duration-300 hover:bg-mainGreenSecond">
					Potwierdź
				</button>
			</div>
		</div>
	);
}
