"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { useGetArticlesHomepageQuery } from "@/app/_redux/features/articleApiSLice";
import Spinner from "../ui/Spinner";

export default function CarouselHomepage() {
	const { data, isLoading } = useGetArticlesHomepageQuery();

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
			{" "}
			{isLoading && !data ? (
				<Spinner color="green" size="big" />
			) : (
				<EmblaCarousel slides={data?.items} options={OPTIONS} />
			)}
		</div>
	);
}
