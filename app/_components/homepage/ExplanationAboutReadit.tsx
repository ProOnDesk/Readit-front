/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { PiCheckCircleThin } from "react-icons/pi";

export default function ExplanationAboutReadit() {
	return (
		<div className="flex flex-col  justify-center items-center bg-blackSecond">
			<div className="flex flex-col max-w-[1800px] mt-20 sm400:mt-24 ">
				<h3 className="flex flex-col items-end justify-center rounded-l-full font-medium py-2 ml-auto mb-10 pr-4 pl-20 text-xl  text-white uppercase bg-mainGreen shadow-lg sm400:text-2xl sm500:pl-28">
					Jak to działa?
				</h3>
				<div className="flex md:flex-col md:justify-center md:items-center">
					<ul className="flex flex-col mt-12 gap-y-9 pb-20 mx-2 sm400:mx-4 sm400:mt-14 sm500:mx-8">
						<li className="flex flex-row  items-center mx-5">
							<span className="text-mainGreen font-medium text-3xl hover:text-mainGreenSecond transition-colors duration-300 sm600:text-4xl md:text-3xl">
								<PiCheckCircleThin />
							</span>
							<p className="mx-3 tracking-wide leading-tight text-lg font-light text-white sm600:text-2xl md:text-xl">
								<span className="text-mainGreen font-medium">
									Zarejestruj się
								</span>{" "}
								i dołącz do społeczności.
							</p>
						</li>
						<li className="flex flex-row  items-center mx-5">
							<span className="text-mainGreen font-medium text-3xl hover:text-mainGreenSecond transition-colors duration-300 sm600:text-4xl md:text-3xl">
								<PiCheckCircleThin />
							</span>
							<p className="mx-3 tracking-wide leading-tight text-lg font-light text-white sm600:text-2xl md:text-xl">
								<span className="text-mainGreen font-medium">
									Pisz i publikuj
								</span>{" "}
								artykuły na wybrane temate.
							</p>
						</li>
						<li className="flex flex-row  items-center mx-5">
							<span className="text-mainGreen font-medium text-3xl hover:text-mainGreenSecond transition-colors duration-300 sm600:text-4xl md:text-3xl">
								<PiCheckCircleThin />
							</span>
							<p className="mx-3 tracking-wide leading-tight text-lg font-light text-white sm600:text-2xl md:text-xl">
								<span className="text-mainGreen font-medium">Udostępniaj</span>{" "}
								artykuły na wybrane temate.
							</p>
						</li>
						<li className="flex flex-row  items-center mx-5">
							<span className="text-mainGreen font-medium text-3xl hover:text-mainGreenSecond transition-colors duration-300 sm600:text-4xl md:text-3xl">
								<PiCheckCircleThin />
							</span>
							<p className="mx-3 tracking-wide leading-tight text-lg font-light text-white sm600:text-2xl md:text-xl">
								Czytaj, komentuj i
								<span className="text-mainGreen font-medium"> oceniaj </span>
								artykuły innych.
							</p>
						</li>
						<li className="flex flex-row  items-center mx-5">
							<span className="text-mainGreen font-medium text-3xl hover:text-mainGreenSecond transition-colors duration-300 sm600:text-4xl md:text-3xl">
								<PiCheckCircleThin />
							</span>
							<p className="mx-3 tracking-wide leading-tight text-lg font-light text-white sm600:text-2xl md:text-xl">
								<span className="text-mainGreen font-medium"> Przeglądaj </span>
								różnorodne kategorie i wątki.
							</p>
						</li>
						<li className="flex flex-row  items-center mx-5 mb-10">
							<span className="text-mainGreen font-medium text-3xl hover:text-mainGreenSecond transition-colors duration-300 sm600:text-4xl md:text-3xl">
								<PiCheckCircleThin />
							</span>
							<p className="mx-3 tracking-wide leading-tight text-lg font-light text-white sm600:text-2xl md:text-xl">
								<span className="text-mainGreen font-medium">
									{" "}
									Zyskuj uznanie{" "}
								</span>
								i śledź swoją popularność na platformie.
							</p>
						</li>
					</ul>
				</div>
				<div className="flex flex-col">
					<h3 className="flex flex-col items-start justify-center rounded-r-full font-medium pl-auto mr-auto py-2 pr-20 mb-20 pl-4 text-xl  text-white uppercase bg-mainGreen shadow-lg sm400:text-2xl sm400:pl-5 sm400:mb-24 sm500:pr-32 sm600:pr-36">
						Nasz cel
					</h3>
					<div className="flex flex-col items-center ">
						<img
							className="bg-cover bg-center rounded-lg opacity-75 shadow-shadowNew sm400:w-[280px] sm500:w-[350px] sm600:w-[420px]"
							src="/people-homepage-big.jpg"
							width={240}
							height={240}
							alt="grupa osób którzy uczą się w laptopie"
						/>
					</div>
					<p className="mt-10 mb-8 px-5 mx-2 leading-tight font-light text-xl text-whiteSecond sm400:mt-16 sm400:px-7 sm600:text-2xl sm600:px-12 md:text-xl md:px-10 md:text-justify">
						Celem <span className="text-mainGreen font-medium">Readit </span>
						jest zbudowanie platformy, gdzie użytkownicy mogą wymieniać się
						wiedzą, dzielić swoimi zainteresowaniami i uczyć się od siebie
						nawzajem.
					</p>
					<p className=" mb-12 px-5 mx-2 tracking-wide leading-tight	font-light text-xl text-whiteSecond sm400:mb-20 sm400:px-7 sm600:text-2xl sm600:px-12 md:text-xl md:px-10 md:text-justify ">
						Serwis wspiera tworzenie i udostępnianie artykułów na różnorodne
						tematy, sprzyjając otwartej komunikacji i wspólnemu rozwojowi
						społeczności.
					</p>
				</div>
				<div className="flex flex-col items-center mb-20 sm400:mb-24">
					<Link
						href="/register"
						className="text-center rounded-full bg-mainGreen text-white font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2 sm400:text-xl sm500:text-2xl">
						Odkrywaj więcej &rarr;
					</Link>
				</div>
			</div>
		</div>
	);
}
