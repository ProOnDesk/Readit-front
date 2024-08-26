import Link from "next/link";

export default function JoinBtn() {
	return (
		<div className="flex flex-col space-y-24">
			<div className="mr-auto px-8 pt-2">
				<Link
					href="/register"
					className="text-center rounded-full bg-mainGreen text-white font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2">
					Dołącz się &rarr;
				</Link>
			</div>
			<div className="flex flex-col ">
				<div className="flex justify-center items-end h-full">
					<Link
						href="/"
						className="m-6 p-6 text-4xl text-mainGreen hover:text-mainGreenSecond transition-colors duration-300">
						&darr;
					</Link>
				</div>
			</div>
		</div>
	);
}

{
	/* <div className="flex flex-col h-screen text-3xl justify-end items-center text-mainGreen">
				&darr;
			</div> */
}
