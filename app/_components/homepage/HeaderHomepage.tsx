/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function HeaderHomepage() {
	return (
		<div className="relative h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] w-full py-14 bg-blackSecond">
			<div className=" grid grid-cols-1 md:grid-cols-2 md:h-[40vh]">
				<div className="relative h-full w-full md:flex md:justify-center md:items-center">
					<img
						src="/homepage-big.jpg"
						className="w-full aspect-video h-full bg-cover bg-center opacity-20 shadow-shadowNew"
						alt=""
					/>

					<div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm px-10 text-center h-full w-full ">
						<h2 className=" text-2xl sm500:text-3xl sm500:px-14  md:text-4xl text-whiteSecond font-medium text-center	tracking-tight">
							Twórz i dziel się swoją wiedzą na Read
							<span className="text-mainGreenSecond">it!</span>
						</h2>

						<p className="text-sm mt-4 sm500:text-base sm500:mt-6 sm500:px-7  md:text-xl md:text-center text-whiteSecond/75  tracking-tight">
							Dziel się swoją{" "}
							<span className="text-mainGreenSecond">wiedzą</span> z innymi i
							buduj wartościowe treści z zakresu technologii, zdrowia oraz
							edukacji.
						</p>
					</div>
				</div>
				<div className="text-sm px-10 text-center hidden md:block  md:justify-center md:items-center h-full w-full order-1 ">
					<p className="  md:text-xl md:text-center text-whiteSecond/75  tracking-tight">
						Dziel się swoją <span className="text-mainGreenSecond">wiedzą</span>{" "}
						z innymi i buduj wartościowe treści z zakresu technologii, zdrowia
						oraz edukacji.
					</p>
				</div>
			</div>
			<div className="px-6 mt-16 md:mt-20 md:px-12">
				<Link
					href="/register"
					className=" text-center sm500:text-lg md:text-xl rounded-full bg-mainGreen text-white font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2 ">
					Dołącz się &rarr;
				</Link>
			</div>
			<Link
				href="/"
				className="absolute bottom-0 p-8  left-1/2 -translate-x-1/2 text-mainGreen hover:text-mainGreenSecond transition-colors duration-300  text-5xl">
				&darr;
			</Link>
		</div>
	);
}

// absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
