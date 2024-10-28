/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import TopCreators from "./BecomeCreators";
import ArrowBtn from "./ArrowBtn";

export default function HeaderHomepage() {
	return (
		<div className="w-full bg-blackSecond h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex justify-center items-center  md:py-3">
			<div className="relative overflow-hidden mx-auto max-w-[1800px]  w-full  h-full  ">
				<div className=" w-full  flex flex-col justify-between h-full items-center   ">
					<div className=" h-full w-full ">
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] flex flex-col justify-between items-center">
							{" "}
							<img
								src="/laptop.jpg"
								className="w-full  top-[15%] bg-cover bg-center opacity-35 shadow-shadowNew object-cover h-[80%] md:hidden "
								alt=""
							/>
							<Link
								href="/register"
								className="text-center mb-6  rounded-full bg-mainGreen text-white font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2 md:hidden">
								Dołącz teraz
							</Link>
						</div>
						<div className="flex flex-col justify-center items-center h-full text-center pb-24 md:items-start md:justify-start md:px-8 md900:px-16 md:mb-36">
							<div className="flex flex-col gap-y-4  md:w-[50%] md:text-left md:gap-y-0 py-4">
								<h4 className="text-white  font-bold text-2xl sm500:px-12 sm600:px-16 sm500:text-3xl md:px-0 md:py-6 md:w-[90%] lg:w-[85%] xl1396:text-4xl ">
									Zamień swoją wiedzę na zysk, odkrywając inspiracjące treści
									tworzone przez innych.
								</h4>
								<p className="text-white px-6 sm500:px-14 sm600:px-24 sm500:text-lg mt-4 md:mt-0 md:px-0 md:text-sm md:w-[70%] xl1396:text-lg">
									Zarejestruj się już dziś na{" "}
									<span className="font-semibold">Readit</span>, zacznij swoją
									podróż jako twórca lub odkrywca!
								</p>
							</div>
							<Link
								href="/register"
								className="text-center z-30 hidden md:block sm500:text-xl md:mt-8 xl1396:mt-28 md:text-lg lg:text-xl xl1396:text-2xl rounded-full bg-mainGreen text-white font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2">
								Dołącz teraz
							</Link>
						</div>
					</div>

					<img
						src="/tlo.png"
						className="hidden md:block absolute md:mt-4 lg:w-[75%] right-0 md:h-[370px] lg:h-[390px] xl1396:h-[480px] bg-cover bg-center opacity-65 shadow-none object-cover"
						alt=""
					/>

					<ArrowBtn />
				</div>
			</div>
		</div>
	);
}
