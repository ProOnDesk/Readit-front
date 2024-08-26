import { PiChatsThin } from "react-icons/pi";
import { PiLightbulbThin } from "react-icons/pi";
import { PiUsersThreeThin } from "react-icons/pi";

export default function AboutReaditIcons() {
	return (
		<div className="flex flex-col items-start px-9 mt-14 gap-y-7 text-4xl text-black">
			<div className="flex flex-row gap-x-4 items-center ">
				<span className=" text-black hover:text-mainGreenSecond transition-colors duration-300">
					<PiChatsThin />
				</span>
				<p className="text-xl font-light text-black">
					Komunikacja i dzielenie się wiedzą.
				</p>
			</div>
			<div className="flex flex-row gap-x-4 items-center ">
				<span className=" text-black hover:text-mainGreenSecond transition-colors duration-300">
					<PiLightbulbThin />
				</span>
				<p className="text-xl font-light text-black ">
					Nowe pomysły, innowacje i inspirację.
				</p>
			</div>
			<div className="flex flex-row gap-x-4 items-center ">
				<span className=" text-black hover:text-mainGreenSecond transition-colors duration-300">
					<PiUsersThreeThin />
				</span>
				<p className="text-xl font-light text-black">
					Społeczności użytkowników.
				</p>
			</div>
		</div>
	);
}
