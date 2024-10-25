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
						<div className="flex flex-col justify-center items-center h-full text-center pb-24 md:items-start md:justify-evenly md:px-6 md:mb-36">
							<div className="flex flex-col gap-y-4  md:w-[60%] md:text-left md:gap-y-6">
								<h4 className="text-white   text-xl">
									Zamień swoją wiedzę na zysk, odkrywając inspiracjące treści
									tworzone przez innych.
								</h4>
								<p className="text-white">
									Zarejestruj się już dziś na{" "}
									<span className="font-semibold">Readit</span>, zacznij swoją
									podróż jako twórca lub odkrywca!
								</p>
							</div>
							<Link
								href="/register"
								className="text-center hidden md:block sm500:text-xl md:text-lg lg:text-xl xl1396:text-2xl rounded-full bg-mainGreen text-white font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2">
								Dołącz teraz
							</Link>
						</div>
					</div>

					<img
						src="/tlo.png"
						className="hidden md:block absolute md:mt-4 lg1100:mt-12  right-0 md:h-[360px] lg:h-[390px] xl1396:h-[480px] bg-cover bg-center opacity-65 shadow-none object-cover"
						alt=""
					/>

					<ArrowBtn />
				</div>
			</div>
		</div>
	);
}

// flex flex-col justify-evenly items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm px-10 text-center h-full w-full gap-4 sm500:gap-6  md:px-6 md:mt-10 lg:mt-20 xl1396:mt-24 md:items-start md:justify-start

// text-xl sm460:text-2xl sm500:text-3xl text-whiteSecond font-medium text-center tracking-wide mb-7 sm600:px-14 md:px-3 md:pr-20 md:text-2xl lg:text-3xl lg:pr-24 md:text-start md:tracking-tight md:leading-loose md:flex md:items-start md:font-semibold lg1100:pr-36 lg1100:text-4xl xl1396:pr-44

// text-sm sm600:text-base text-whiteSecond tracking-wide px-10 sm600:px-12 md:text-start md:px-3 md:pr-40 lg:pr-44 md:mt-8 md:tracking-tight lg1100:pr-48 xl1396:mt-10 lg1100:text-lg xl1396:w-[70%]

// flex flex-col justify-center items-center mb-20 md:px-3 md:mt-4 md900:mt-14 xl1396:mt-24 md:flex md:items-start md:justify-end
