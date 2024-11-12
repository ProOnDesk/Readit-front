"use client";

import React from "react";

export default function ArrowBtn() {
	return (
		<button
			onClick={() => {
				const scrollHeight = window.innerHeight;
				window.scrollTo({
					top: scrollHeight - 32,
					behavior: "smooth",
				});
			}}
			className="absolute bottom-0 p-4 left-1/2 -translate-x-1/2 text-mainGreen hover:text-mainGreenSecond transition-all duration-300 text-5xl hover:-translate-y-3 flex flex-col items-center lg:hidden">
			<span className="text-base text-mainGreen mb-1">
				Sprawdź!
			</span>
			&darr;
		</button>
	);
}
