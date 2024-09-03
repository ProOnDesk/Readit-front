import CarouselHomepage from "./CarouselHomepage";

export default function PopularArticlesHomepage() {
	return (
		<div className="flex flex-col justify-center">
			<h2 className="flex flex-col items-center my-14 font-medium text-3xl text-black">
				Popularne artykuły
			</h2>
			<p className="pb-6 px-6  text-blackSecond tracking-wide leading-tight font-light text-xl md:px-10 text-center max-w-[1100px] mx-auto">
				Lorem ipsum, dolor sit{" "}
				<span className="text-mainGreen">amet consectetur adipisicing</span>{" "}
				elit. Quod dicta libero magnam iste a! Maxime magni sapiente obcaecati!
				Nam <span className="text-mainGreen">corrupti natus soluta</span>{" "}
				recusandae dicta asperiores.
			</p>

			<CarouselHomepage />
		</div>
	);
}
