import Image from "next/image";

export default function WelcomeImg() {
	return (
		<div className="relative w-full">
			<div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black pt-8 pb-4 "></div>
			<div>
				<Image
					className="h-auto bg-cover bg-center opacity-20 shadow-shadowNew"
					src="/homepage-small.jpg"
					width={600}
					height={600}
					alt="mężczyzna czytający posty"
				/>
			</div>
			<div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-b from-black pt-16 pb-4 "></div>
		</div>
	);
}

// w-full h-auto bg-cover bg-center opacity-25 shadow-shadowNew
