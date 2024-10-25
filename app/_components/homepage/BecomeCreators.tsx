/* eslint-disable @next/next/no-img-element */

export default function BecomeCreators() {
	return (
		<div className=" bg-white py-14">
			<div className="flex flex-col items-center sm500:flex-row">
				<div className="flex justify-center sm500:w-1/2 p-6 ">
					<img
						src="/facet-mysli.png"
						className="hidden sm500:block object-contain w-[100%] h-auto sm500:w-[90%] sm900:w-[80%] lg:w-[70%] xl:w-[60%]"
						alt=""
					/>
				</div>

				<div className="md:px-14 lg:px-20 sm500:w-1/2">
					<h4 className="text-2xl md:text-3xl text-blackSecond font-bold text-center mt-8 mb-6 md:mb-8 tracking-wide">
						Zostań twórcą!
					</h4>

					<p className="text-center px-10 font-medium text-sm sm500:text-xs md:text-sm tracking-tight mb-16 ">
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

// className="text-xl sm500:text-3xl text-whiteSecond font-medium text-center	tracking-wide"
