"use client";

import clsx from "clsx";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

import {
	NextButton,
	PrevButton,
	usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { Article } from "@/app/_redux/features/authApiSlice";
import ArticleItem from "../profile/ArticleItem";

type PropType = {
	slides: Article[];
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
		<section className="bg-red-500 max-w-5xl mx-auto text-blackSecond w-full px-6 py-8">
			<div className="flex flex-col items-center">
				<div className="flex justify-center items-center gap-1 w-full ">
					<PrevButton
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
						aria-label="Poprzednia karta w karuzeli, previous card in carousel"
						className="w-9 h-9 hidden sm500:flex items-center justify-center rounded-full text-webPrimary "
					/>
					<div className="overflow-hidden flex-grow" ref={emblaRef}>
						<div className="flex touch-pan-y touch-pinch-zoom w-full gap-x-1 md:gap-x-3">
							{slides.map((data, i) => (
								<div
									key={i}
									className="flex-shrink-0 w-full sm600:w-1/2 md:w-1/3 ">
									<ArticleItem article={data} key={i} />
								</div>
							))}
						</div>
					</div>
					<NextButton
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
						aria-label="Następna karta w karuseli, next card in carousel"
						className="w-9 h-9 hidden sm500:flex items-center justify-center rounded-full text-webPrimary"
					/>
				</div>
			</div>

			<div className="flex flex-wrap justify-center w-full items-center gap-x-5 mt-4 md:mt-12">
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						onClick={() => onDotButtonClick(index)}
						className={clsx(
							"w-4 h-4 flex items-center justify-center rounded-full ",
							selectedIndex === index ? "bg-mainGreen" : "bg-whiteSecond"
						)}
					/>
				))}
			</div>
		</section>
	);
};

export default EmblaCarousel;
