"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const slides = [
	{
		img: "/fox-small.jpg",
		title: "emblaCarousel",
		author: "Paweł Ochał",
		slug: "tytul-artykulu-jeden",
		mark: 4.5,
	},
	{
		img: "/fox-small.jpg",
		title: "emblaCarousel",
		author: "Paweł Ochał",
		slug: "tytul-artykulu-jeden",
		mark: 4.5,
	},
	{
		img: "/fox-small.jpg",
		title: "emblaCarousel",
		author: "Paweł Ochał",
		slug: "tytul-artykulu-jeden",
		mark: 4.5,
	},
	{
		img: "/fox-small.jpg",
		title: "emblaCarousel",
		author: "Paweł Ochał",
		slug: "tytul-artykulu-jeden",
		mark: 4.5,
	},
	{
		img: "/fox-small.jpg",
		title: "emblaCarousel",
		author: "Paweł Ochał",
		slug: "tytul-artykulu-jeden",
		mark: 4.5,
	},
	{
		img: "/fox-small.jpg",
		title: "emblaCarousel",
		author: "Paweł Ochał",
		slug: "tytul-artykulu-jeden",
		mark: 4.5,
	},
];

export default function CarouselHomepage() {
	const OPTIONS: EmblaOptionsType = {
		align: "center",
		loop: true,
		slidesToScroll: 1,
		breakpoints: {
			"(min-width: 768px)": { slidesToScroll: 2 },
			"(min-width: 1024px)": { slidesToScroll: 3 },
		},
	};

	return (
		<div className="">
			<EmblaCarousel slides={slides} options={OPTIONS} />
		</div>
	);
}
