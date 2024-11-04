/* eslint-disable @next/next/no-img-element */

export default function BecomeCreators() {
	return (
		<div className="flex flex-col justify-center items-center  w-full bg-white py-14 md:py-20">
			<div className="max-w-[1800px] w-full mx-auto flex flex-col justify-evenly items-center space-x-1 sm500:flex-row px-20">
				<div className="relative sm500:w-1/2 flex justify-center items-center">
					<div className="absolute bottom-0 bg-blackSecond w-[220px] h-[220px]"></div>
					<img
						src="/man.png"
						className="hidden sm500:block h-[250px] relative z-10"
						alt=""
					/>
				</div>

				<div className="flex flex-col items-center md:px-8 lg:px-16 sm500:w-1/2 ">
					<h4 className="text-2xl md:text-xl md800:text-2xl text-blackSecond font-bold text-center mt-8 mb-2 md:mb-4 tracking-wide">
						Zostań twórcą!
					</h4>

					<p className="text-center px-10 font-semibold text-sm sm500:text-xs md:text-xs md800:text-sm tracking-tight ">
						Twórcy na <span className="text-mainGreen">ReadIt</span> to osoby,
						które dzielą się swoją wiedzą i pasją z innymi, tworząc wartościowe
						materiały w formie artykułów, e-booków, kursów czy poradników.
						Publikują swoje treści na platformie, umożliwiając innym
						użytkownikom dostęp do unikalnych i inspirujących informacji
					</p>
				</div>
			</div>
		</div>
	);
}
