/* eslint-disable @next/next/no-img-element */

export default function BecomeCreators() {
	return (
		<div className="flex flex-col justify-center items-center  w-full bg-white py-14">
			<div className="max-w-[1800px] w-full mx-auto flex flex-col justify-between items-center sm500:flex-row px-6  lg:px-14">
				<div className="relative sm500:w-1/2 flex justify-center items-center">
					<div className="absolute bottom-0 bg-blackSecond w-[300px] h-[230px]"></div>
					<img
						src="/man.png"
						className="hidden sm500:block h-[300px] relative z-10"
						alt=""
					/>
				</div>

				<div className="md:px-8 lg:px-16 sm500:w-1/2 md:mt-10">
					<h4 className="text-2xl md:text-xl md800:text-2xl text-blackSecond font-bold text-center mt-8 mb-6 md:mb-4 tracking-wide">
						Zostań twórcą!
					</h4>

					<p className="text-center px-10 font-medium text-sm sm500:text-xs md:text-xs md800:text-sm tracking-tight mb-16 ">
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
