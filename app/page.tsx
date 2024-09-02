import AboutReadit from "./_components/homepage/AboutReadit";
import ExplanationAboutReadit from "./_components/homepage/ExplanationAboutReadit";
import HeaderHomepage from "./_components/homepage/HeaderHomepage";

export default function Home() {
  return (
    <div className="mx-auto ">
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
