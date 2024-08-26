import Link from "next/link";
import { PiCheckCircleThin } from "react-icons/pi";
import PurposeOfReaditImg from "./PurposeOfReaditImg";

export default function ExplanationAboutReadit() {
	return (
		<div className="flex flex-col bg-blackSecond">
			<div className="flex flex-col mt-20 ">
				<h3 className="flex flex-col items-end justify-center rounded-l-full font-medium py-2 ml-28 mb-10 pr-4 text-xl  text-white uppercase bg-mainGreen shadow-lg">
					Jak to działa?
				</h3>
				<ul className="flex flex-col mt-12 gap-y-9 pb-20">
					<li className="flex flex-row  items-center mx-5">
						<span className="text-mainGreen font-medium text-3xl">
							<PiCheckCircleThin />
						</span>
						<p className="mx-3 tracking-wide leading-tight text-lg font-light text-white">
							<span className="text-mainGreen font-medium">
								Zarejestruj się
							</span>{" "}
							i dołącz do społeczności.
						</p>
					</li>
					<li className="flex flex-row  items-center mx-5">
						<span className="text-mainGreen font-medium text-2xl">
							<PiCheckCircleThin />
						</span>
						<p className="mx-3 tracking-wide leading-tight text-lg font-light text-white">
							<span className="text-mainGreen font-medium">
								Pisz i publikuj
							</span>{" "}
							artykuły na wybrane temate.
						</p>
					</li>
					<li className="flex flex-row  items-center mx-5">
						<span className="text-mainGreen font-medium text-2xl">
							<PiCheckCircleThin />
						</span>
						<p className="mx-3 tracking-wide leading-tight text-lg font-light text-white">
							<span className="text-mainGreen font-medium">Udostępniaj</span>{" "}
							artykuły na wybrane temate.
						</p>
					</li>
					<li className="flex flex-row  items-center mx-5">
						<span className="text-mainGreen font-medium text-2xl">
							<PiCheckCircleThin />
						</span>
						<p className="mx-3 tracking-wide leading-tight text-lg font-light text-white">
							Czytaj, komentuj i
							<span className="text-mainGreen font-medium"> oceniaj </span>
							artykuły innych.
						</p>
					</li>
					<li className="flex flex-row  items-center mx-5">
						<span className="text-mainGreen font-medium text-2xl">
							<PiCheckCircleThin />
						</span>
						<p className="mx-3 tracking-wide leading-tight text-lg font-light text-white">
							<span className="text-mainGreen font-medium"> Przeglądaj </span>
							różnorodne kategorie i wątki.
						</p>
					</li>
					<li className="flex flex-row  items-center mx-5 mb-10">
						<span className="text-mainGreen font-medium text-2xl">
							<PiCheckCircleThin />
						</span>
						<p className="mx-3 tracking-wide leading-tight text-lg font-light text-white">
							<span className="text-mainGreen font-medium">
								{" "}
								Zyskuj uznanie{" "}
							</span>
							i śledź swoją popularność na platformie.
						</p>
					</li>
				</ul>
				<div className="flex flex-col">
					<h3 className="flex flex-col items-start justify-center rounded-r-full font-medium py-2 mr-40 mb-20 pl-4 text-xl  text-white uppercase bg-mainGreen shadow-lg">
						Nasz cel
					</h3>
					<PurposeOfReaditImg />
					<p className="mt-10 mb-8 px-5 tracking-wide leading-tight	font-light text-xl text-whiteSecond">
						Celem <span className="text-mainGreen font-medium">Readit </span>
						jest zbudowanie platformy, gdzie użytkownicy mogą wymieniać się
						wiedzą, dzielić swoimi zainteresowaniami i uczyć się od siebie
						nawzajem.
					</p>
					<p className=" mb-12 px-5 tracking-wide leading-tight	font-light text-xl text-whiteSecond">
						Serwis wspiera tworzenie i udostępnianie artykułów na różnorodne
						tematy, sprzyjając otwartej komunikacji i wspólnemu rozwojowi
						społeczności.
					</p>
				</div>
				<div className="flex flex-col items-center mb-20">
					<Link
						href="/register"
						className="text-center rounded-full bg-mainGreen text-white font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2">
						Odkrywaj więcej &rarr;
					</Link>
				</div>
			</div>
		</div>
	);
}
