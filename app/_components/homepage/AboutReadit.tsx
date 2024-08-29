import { PiChatsThin } from "react-icons/pi";
import { PiLightbulbThin } from "react-icons/pi";
import { PiUsersThreeThin } from "react-icons/pi";

export default function AboutReadit() {
	return (
		<div className="flex flex-col mx-2 my-10 gap-y-4">
			<h2 className="flex flex-col items-center my-10  text-3xl font-medium text-blackSecond ">
				O Readit.
			</h2>
			<p className="px-6 text-justify tracking-wide leading-tight font-light  text-blackSecond text-xl ">
				<span className="text-mainGreen font-medium">Readit</span> to
				rewolucyjny projekt stworzony z myślą o ludzicach, którzy pragną dzielić
				się swoją wiedzą i pasją z innymi. To platforma, która{" "}
				<span className="text-mainGreen font-medium">
					umożliwia tworzenie i publikowanie artykułów
				</span>{" "}
				na różnorodne tematy - od technologii po zdrowie i edukację.
			</p>

			<div className=" flex flex-col items-start justify-center  gap-y-6 md:flex-row md:items-center md:justify-center mx-10 mt-12  sm500:gap-y-8">
				<div className="flex flex-row text-left  md:flex-col justify-start items-center text-blackSecond gap-x-4 ">
					<span className="text-4xl md:text-5xl hover:text-mainGreenSecond transition-colors duration-300">
						<PiChatsThin />
					</span>
					<p className="text-lg md:text-xl font-light">
						Komunikacja i dzielenie się wiedzą.
					</p>
				</div>
				<div className="flex flex-row text-left md:flex-col justify-start items-center text-blackSecond gap-x-4  ">
					<span className="text-4xl md:text-5xl hover:text-mainGreenSecond transition-colors duration-300">
						<PiLightbulbThin />
					</span>
					<p className="text-lg md:text-xl font-light  ">
						Nowe pomysły, innowacje i inspirację.
					</p>
				</div>
				<div className="flex flex-row text-left md:flex-col justify-start items-center text-blackSecond gap-x-4  ">
					<span className="text-4xl md:text-5xl hover:text-mainGreenSecond transition-colors duration-300">
						<PiUsersThreeThin />
					</span>
					<p className="text-lg md:text-xl font-light ">
						Społeczności użytkowników.
					</p>
				</div>
			</div>
			<p className="py-12 px-6  text-blackSecond tracking-wide leading-tight font-light text-xl md:px-10 text-justify">
				Lorem ipsum dolor sit, amet consectetur.{" "}
				<span className="text-mainGreen">Modi saepe</span> minima Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Porro labore, possimus
				laudantium rem iste reiciendis!
			</p>
		</div>
	);
}
