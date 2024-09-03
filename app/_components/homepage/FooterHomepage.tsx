import Link from "next/link";
import { LiaFacebookF } from "react-icons/lia";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";

export default function FooterHomepage() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="flex flex-col justify-center items-center py-4 text-whiteSecond bg-blackSecond">
			<h3 className="flex items-start max-w-[1800px]  text-2xl py-2 sm500:text-3xl ">
				Read<span className="text-mainGreen">it</span>
			</h3>
			<div className="grid grid-cols-2 gap-x-12 gap-y-4 py-6 sm500:py-8 sm500:gap-x-20  sm500:gap-y-6 sm600:grid-cols-3 sm600:gap-x-14 lg:grid-cols-4">
				<Link
					href="/register"
					className="text-whiteSecond hover:text-mainGreen tracking-wide leading-tight font-light transition-all duration-300 sm500:text-xl">
					Lorem, ipsum{" "}
				</Link>
				<Link
					href="/register"
					className="text-whiteSecond hover:text-mainGreen tracking-wide leading-tight font-light transition-all duration-300 sm500:text-xl">
					Lorem, ipsum
				</Link>
				<Link
					href="/register"
					className="text-whiteSecond hover:text-mainGreen tracking-wide leading-tight font-light transition-all duration-300 sm500:text-xl">
					Lorem, ipsum
				</Link>
				<Link
					href="/register"
					className="text-whiteSecond hover:text-mainGreen tracking-wide leading-tight font-light transition-all duration-300 sm500:text-xl">
					Lorem, ipsum
				</Link>
				<Link
					href="/register"
					className="text-whiteSecond hover:text-mainGreen tracking-wide leading-tight font-light transition-all duration-300 sm500:text-xl">
					Lorem, ipsum
				</Link>
				<Link
					href="/register"
					className="text-whiteSecond hover:text-mainGreen tracking-wide leading-tight font-light transition-all duration-300 sm500:text-xl">
					Lorem, ipsum
				</Link>
				<Link
					href="/register"
					className="text-whiteSecond hover:text-mainGreen tracking-wide leading-tight font-light transition-all duration-300 sm500:text-xl">
					Lorem, ipsum
				</Link>
				<Link
					href="/register"
					className="text-whiteSecond hover:text-mainGreen tracking-wide leading-tight font-light transition-all duration-300 sm500:text-xl">
					Lorem, ipsum
				</Link>
				<Link
					href="/register"
					className="text-whiteSecond hover:text-mainGreen tracking-wide leading-tight font-light transition-all duration-300 sm500:text-xl">
					Lorem, ipsum
				</Link>
				<Link
					href="/register"
					className="text-whiteSecond hover:text-mainGreen tracking-wide leading-tight font-light transition-all duration-300 sm500:text-xl">
					Lorem, ipsum
				</Link>
				<Link
					href="/register"
					className="text-whiteSecond hover:text-mainGreen tracking-wide leading-tight font-light transition-all duration-300 sm500:text-xl">
					O nas
				</Link>
				<Link
					href="/register"
					className="text-whiteSecond hover:text-mainGreen tracking-wide leading-tight font-light transition-all duration-300 sm500:text-xl">
					Kontakt
				</Link>
			</div>

			<hr className="flex flex-col items-center w-10/12 h-1 mt-2 mx-10 border-whiteSecond opacity-35 sm600:mt-6" />

			<div className="flex flex-row justify-center items-center  gap-x-8 py-10 sm600:gap-x-12">
				<div className="text-lg border border-whiteSecond/50 p-2 rounded-full hover:border-mainGreenSecond transition-colors duration-300 sm600:text-xl group ">
					<Link href="/">
						<LiaFacebookF className="transition-colors duration-300 text-current group-hover:text-mainGreenSecond" />
					</Link>
				</div>
				<div className="text-lg border border-whiteSecond/50 p-2 rounded-full hover:border-mainGreenSecond transition-colors duration-300 sm600:text-xl group">
					<Link href="/">
						<SlSocialInstagram className="transition-colors duration-300 text-current group-hover:text-mainGreenSecond" />
					</Link>
				</div>
				<div className="text-lg border border-whiteSecond/50 p-2 rounded-full hover:border-mainGreenSecond transition-colors duration-300 sm600:text-xl group">
					<Link href="/">
						<RiTwitterXFill className="transition-colors duration-300 text-current group-hover:text-mainGreenSecond" />
					</Link>
				</div>
				<div className="text-lg border border-whiteSecond/50 p-2 rounded-full hover:border-mainGreenSecond transition-colors duration-300 sm600:text-xl group">
					<Link href="/">
						<RiLinkedinLine className="transition-colors duration-300 text-current group-hover:text-mainGreenSecond" />
					</Link>
				</div>
			</div>

			<p className="py-4">
				{currentYear} &copy; Read<span className=" text-mainGreen">it</span>.
			</p>
		</footer>
	);
}

{
	/* <div>
<p>Lorem3</p>
<p>Lorem3</p>
<p>Lorem3</p>
<p>Lorem3</p>
<p>Lorem3</p>
<p>Lorem3</p>
<p>Lorem3</p>
<p>Lorem3</p>
<p>Lorem3</p>
<p>Lorem3</p>
</div>
<hr />
<div>Ikonka</div>
<div>Ikonka</div>
<div>Ikonka</div>
<div>Ikonka</div> */
}

// flex flex-col items-center my-10  text-3xl font-medium text-blackSecond
