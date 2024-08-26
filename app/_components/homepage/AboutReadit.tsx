import AboutReaditIcons from "./AboutReaditIcons";

export default function AboutReadit() {
	return (
		<div className="flex flex-col">
			<h2 className="flex flex-col items-center my-14 font-medium text-3xl text-black">
				O Readit.
			</h2>
			<p className="px-5 tracking-wide leading-tight		font-light text-xl text-black">
				<span className="text-mainGreen font-medium">Readit</span> to
				rewolucyjny projekt stworzony z myślą o ludzicach, którzy pragną dzielić
				się swoją wiedzą i pasją z innymi. To platforma, która{" "}
				<span className="text-mainGreen font-medium">
					umożliwia tworzenie i publikowanie artykułów
				</span>{" "}
				na różnorodne tematy - od technologii po zdrowie i edukację.
			</p>
			<AboutReaditIcons />
			<p className="px-5 pb-5 my-14 text-xl font-light  text-black">
				Lorem ipsum dolor sit, amet consectetur.{" "}
				<span className="text-mainGreen">Modi saepe</span> minima unde.
				Reiciendis, voluptatum? Iusto?
			</p>
		</div>
	);
}

{
	/* <div className="text-3xl bg-red">O Readit.</div>; */
}
