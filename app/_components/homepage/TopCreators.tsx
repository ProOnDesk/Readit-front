/* eslint-disable @next/next/no-img-element */

export default function TopCreators() {
	return (
		<div className="flex flex-col justify-center items-center  w-full py-14 sm600:px-8 bg-blackSecond">
			<div className="max-w-[1800px] w-full mx-auto flex flex-col justify-between h-full items-center ">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div>
						<h3 className="text-2xl md:text-xl px-8 md:px-4 py-5 md:py-3  text-whiteSecond font-semibold text-center tracking-tig md900:px-10 md900:text-2xl">
							Top Twórcy Readit: Odkryj Mistrzów, Którzy Inspirują Tysiące
						</h3>
						<p className="text-center px-8 md900:px-10 mt-6 md:mt-4 mb-16 font-medium text-xs  tracking-tight md:tracking-wide text-whiteSecond/90">
							Nasi najpopularniejsi twórcy to prawdziwe autorytety w swoich
							dziedzinach, których treści przyciągają tysiące odwiedzających.
							Dzięki pasji, wiedzy i umijętnościom, ich materiały cieszą się
							ogromnym zainteresowaniem i zaufaniem społeczności. To ludzie,
							którzy potrafią zainspirować, przekazać wartościowe informacje i
							pomóc w rozwoju osobistym oraz zawodowym. Dołącz do grona tych,
							którzy już odkryli ich treści i przekonaj się, dlaczego są tak
							popularni!
						</p>
					</div>
					<div className="relative flex flex-col justify-center items-center mt-4 mb-16">
						<div className="rounded-full w-[180px] h-[180px] ring-[14px] ring-whiteSecond/25">
							<div className="absolute top-[90%] left-[30%] sm600:left-[38%] md:left-[30%] lg1100:left-[36%] 2xl:left-[39%] transform -translate-x-1/2 -translate-y-1/2 text-center">
								<img
									src="/fox-small.jpg"
									className="rounded-full bg-cover bg-center  object-cover h-[90px] w-[90px] lg1100:h-[100px] lg1100:w-[100px]  ring-[4px] md:ring-[5px] ring-whiteSecond/50"
									alt=""
								/>
								<p className="bg-whiteSecond text-[8px] text-center font-medium  rounded-lg ">
									Karolina Lipińska
								</p>
							</div>
							<div className="absolute top-[5%] md:top-[15%] lg:top-[8%] right-[28%]  sm600:right-[35%] md:right-[33%] lg:right-[40%]  transform -translate-x-1/2 -translate-y-1/2 text-center">
								<img
									src="/fox-small.jpg"
									className="rounded-full bg-cover bg-center  object-cover h-[70px] w-[70px] lg1100:h-[80px] lg1100:w-[80px] ring-[4px] md:ring-[5px] ring-whiteSecond/50"
									alt=""
								/>
								<p className="bg-whiteSecond text-[8px] text-center font-medium  rounded-lg ">
									rudy_placynek
								</p>
							</div>
							<div className="absolute top-[95%] md:top-[86%] lg:top-[90%] right-[16%] sm460:right-[25%] sm600:right-[30%] md:right-[18%] lg:right-[24%] lg1100:right-[24%] xl:right-[28%] 2xl:right-[32%] transform -translate-x-1/2 -translate-y-1/2 text-center">
								<img
									src="/fox-small.jpg"
									className="rounded-full bg-cover bg-center  object-cover h-[50px] w-[50px] lg1100:h-[60px] lg1100:w-[60px] ring-[4px] md:ring-[5px] ring-whiteSecond/50"
									alt=""
								/>
								<p className="bg-whiteSecond text-[8px] text-center font-medium  rounded-lg ">
									Jan Trąbski
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// relative h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] w-full py-1
