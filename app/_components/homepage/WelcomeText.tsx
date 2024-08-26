export default function WelcomeText() {
	return (
		<>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
				<h2 className="text-3xl pb-3 mx-2 font-medium 	tracking-tight		text-whiteSecond">
					Twórz i dziel się swoją wiedzą na Read
					<span className="text-mainGreenSecond">it!</span>
				</h2>
				<p className="text-base mx-5  pb-2 text-whiteSecond/75 text-left tracking-tight	">
					Dziel się swoją wiedzą z innymi i buduj wartościowe treści z zakresu
					technologii, zdrowia oraz edukacji.
				</p>
			</div>
		</>
	);
}
