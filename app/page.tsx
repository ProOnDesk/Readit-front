import FooterHomepage from "./_components/homepage/FooterHomepage";
import HeaderHomepage from "./_components/homepage/HeaderHomepage";
import BecomeCreators from "./_components/homepage/BecomeCreators";
import TopCreators from "./_components/homepage/TopCreators";
import CarouselHomepage from "./_components/homepage/CarouselHomepage";
import LastPartOfHomepage from "./_components/homepage/LastPartOfHomepage";

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
