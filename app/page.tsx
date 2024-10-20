import AboutReadit from "./_components/homepage/AboutReadit";
import ExplanationAboutReadit from "./_components/homepage/ExplanationAboutReadit";
import FooterHomepage from "./_components/homepage/FooterHomepage";
import HeaderHomepage from "./_components/homepage/HeaderHomepage";
import PopularArticlesHomepage from "./_components/homepage/PopularArticlesHomepage";

export default function Home() {
	return (
		<div className="mx-auto ">
			<HeaderHomepage />
			<AboutReadit />
			<ExplanationAboutReadit />

			<PopularArticlesHomepage />
			<FooterHomepage  />
		</div>
	);
}
