import AboutReadit from "./_components/homepage/AboutReadit";
import CarouselHomepage from "./_components/homepage/CarouselHomepage";
import ExplanationAboutReadit from "./_components/homepage/ExplanationAboutReadit";
import FooterHomepage from "./_components/homepage/FooterHomepage";
import JoinButton from "./_components/homepage/JoinBtn";
import WelcomeImg from "./_components/homepage/WelcomeImg";
import WelcomeText from "./_components/homepage/WelcomeText";

export default function Home() {
	return (
		// <main className="flex min-h-screen flex-col items-center justify-center text-center bg-blackSecond">
		// 	<WelcomeImg />
		// 	<WelcomeText />
		// 	{/* <div className="w-full py-10 bg-black text-white">dsadsa</div>
		// 		<div className="w-full py-10 bg-blackSecond text-white">dsadsa</div>
		// 		<div className="w-full py-10 bg-mainGreen text-black">dsadsa</div> */}
		// 	{/* <Logo /> */}
		// </main>
		<>
			<div className="flex flex-col bg-blackSecond ">
				<div className="flex flex-col justify-start items-center w-full relative">
					<WelcomeImg />
					<WelcomeText />
				</div>
				<JoinButton />
			</div>
			<AboutReadit />
			<ExplanationAboutReadit />
			
			<CarouselHomepage />
			<FooterHomepage />
		</>
	);
}
