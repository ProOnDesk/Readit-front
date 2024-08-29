import AboutReadit from "./_components/homepage/AboutReadit";
import ExplanationAboutReadit from "./_components/homepage/ExplanationAboutReadit";
import HeaderHomepage from "./_components/homepage/HeaderHomepage";
import JoinButton from "./_components/homepage/JoinBtn";
import WelcomeImg from "./_components/homepage/WelcomeImg";
import WelcomeText from "./_components/homepage/WelcomeText";

export default function Home() {
	return (
		<div className="max-w-5xl mx-auto ">
			<HeaderHomepage />
			<AboutReadit />
			<ExplanationAboutReadit />
			{/* <
			<PopularArticlesHomepage />
			<FooterHomepage />
			<Footer /> */}
		</div>
	);
}
