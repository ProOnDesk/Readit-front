import BecomeCreators from "./_components/homepage/BecomeCreators";
import CarouselHomepage from "./_components/homepage/CarouselHomepage";
import FooterHomepage from "./_components/homepage/FooterHomepage";
import HeaderHomepage from "./_components/homepage/HeaderHomepage";
import LastPartOfHomepage from "./_components/homepage/LastPartOfHomepage";
import TopCreators from "./_components/homepage/TopCreators";

export default function Home() {
	return (
		<div className="w-full mx-auto flex flex-col justify-between h-full items-center">
			<HeaderHomepage />
			<BecomeCreators />
			<TopCreators />
			<CarouselHomepage />
			<LastPartOfHomepage />
			{/* <FooterHomepage /> */}
		</div>
	);
}
