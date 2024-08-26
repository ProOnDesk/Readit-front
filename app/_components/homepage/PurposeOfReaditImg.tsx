import Image from "next/image";

export default function PurposeOfReaditImg() {
	return (
		<div className="flex flex-col items-center ">
			<Image
				className="h-auto bg-cover bg-center rounded-lg opacity-75 shadow-shadowNew "
				src="/people-homepage-small.jpg"
				width={240}
				height={240}
				alt=""
			/>
		</div>
	);
}
