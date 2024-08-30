import CarouselHomepage from "./CarouselHomepage";

export default function PopularArticlesHomepage() {
	return (
		<div className="flex flex-col justify-center">
			<h2 className="flex flex-col items-center my-14 font-medium text-3xl text-black">
				Popularne artykuły
			</h2>

			<CarouselHomepage />
		</div>
	);
}
