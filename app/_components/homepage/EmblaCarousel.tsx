/* eslint-disable @next/next/no-img-element */

"use client";

import clsx from "clsx";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Image from "next/image";

import {
	NextButton,
	PrevButton,
	usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

type Slide = {
	img: string;
	title: string;
	author: string;
	slug: string;
	mark: number;
};

type PropType = {
	slides: Slide[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<section>
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex gap-x-4 overflow-x-auto">
					{slides.map((data, i) => (
						<div
							key={i}
							className="sm:w-3/4 md:w-1/2 lg:w-1/3 rounded-md bg-whiteSecond  ">
							<div className=" ">
								<img
									src={data.img}
									className="flex w-full rounded-lg "
									width={140}
									height={140}
									alt={"cos"}
								/>
								<div className="">
									<p className=" ">{data.title}</p>
								</div>
								<div>{data.author}</div>
								<div>
									{" "}
									<div>{data.slug}</div>
									<div>{data.mark}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;

{
	/* <section className="max-w-5xl mx-auto text-white w-full px-3 py-24">
			<div className="flex flex-col items-center">
				<div className="flex justify-center items-center gap-1 w-full">
					<PrevButton
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
						className="w-9 h-9 hidden sm500:flex items-center justify-center rounded-full text-webPrimary "
					/>
					<div className="overflow-hidden flex-grow" ref={emblaRef}>
						<div className="flex touch-pan-y touch-pinch-zoom w-full md:w-full">
							{slides.map((data, i) => (
								<div
									key={i}
									className="basis-full md:basis-1/2 lg:basis-1/3 flex-grow flex-shrink-0 px-3 ">
									<div className="bg-webAccentWhite dark:bg-black flex flex-col h-[380px] text-black rounded-2xl p-6 ">
										<div className="relative w-full flex justify-start items-center mb-2">
											<div className="absolute bottom-0 left-0 -translate-y-full -translate-x-full h-3 w-3 bg-webPrimary rounded-tr-lg"></div>
											<div>
												<p className="text-webBackground text-2xl font-semibold ml-1 ">
													{data.title}
												</p>
												<div className="w-full h-3 bg-webPrimary rounded-bl-lg"></div>
											</div>
										</div>
										<div className="font-barlow">{data.author}</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<NextButton
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
						className="w-9 h-9 hidden sm500:flex items-center justify-center rounded-full text-webPrimary"
					/>
				</div>
			</div>

			<div
				className="flex flex-wrap justify-center w-full items-center gap-5 mt-3">
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						onClick={() => onDotButtonClick(index)}
						className={clsx(
							"w-4 h-4 flex items-center justify-center rounded-full ",
							selectedIndex === index ? "bg-webPrimary" : "bg-white"
						)}
					/>
				))}
			</div>
		</section> */
}
