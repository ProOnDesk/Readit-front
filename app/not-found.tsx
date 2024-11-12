/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] md:h-[calc(100vh-80px)]">
			<div className="relative">
				<img
					src="/notFound.svg"
					className="hidden sm500:block h-[350px] md900:h-[450px]"
					alt=""
				/>
			</div>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 sm500:gap-2">
				<div className="sm500:mt-24 md:mt-28">
					{" "}
					<p className="text-blackSecond text-3xl sm500:text-base md900:text-2xl">
						Oops!
					</p>
					<p className="font-extrabold text-3xl sm500:text-lg tracking-widest md900:text-3xl">
						404
					</p>
					<p className="text-xl sm500:text-xs md900:text-base uppercase mb-5 md:mb-2 md900:mt-2 md900:mb-4 ">
						Nie znaleziono
					</p>
					<Link
						href="/"
						className="text-center text-base sm500:text-xs mt-4 md:mt-1 rounded-full bg-blackSecond text-white font-medium hover:bg-blackFour transition-colors duration-300 px-6 py-2 sm500:py-1">
						Strona głowna
					</Link>
				</div>
			</div>
		</div>
	);
}
