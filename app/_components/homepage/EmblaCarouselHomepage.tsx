"use client";

import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";

import { useArticleForHomepageMutation } from "@/app/_redux/features/articlesApiSlice";
import ArticleItem from "../profile/ArticleItem";
import ArticleItemLoader from "../profile/ArticleItemLoader";

type PropType = {
	options?: EmblaOptionsType;
};

const EmblaCarouselHomepage: React.FC<PropType> = (props) => {
	const { options } = props;
	const [getArticleForHomepage, { isLoading, data }] =
		useArticleForHomepageMutation();
	const [emblaRef] = useEmblaCarousel(options, [
		AutoScroll({
			playOnInit: true,
			speed: 1,
			stopOnInteraction: false,
		}),
	]);

	useEffect(
		function () {
			getArticleForHomepage();
		},
		[getArticleForHomepage]
	);

	console.log(data);

	return (
		<section className=" relative max-w-[1800px] mx-auto text-white dark:text-webYellow w-full">
			<div className="flex flex-col items-center w-full h-full">
				<div className="overflow-hidden flex-grow w-full" ref={emblaRef}>
					<div className="flex touch-pan-y touch-pinch-zoom w-full">
						{isLoading &&
							Array.from({ length: 20 }).map((_, index) => (
								<div key={index} className="basis-full py-10 ml-10 sm:ml-24 ">
									<ArticleItemLoader key={index} />
								</div>
							))}

						{data?.items.map((article, i) => (
							<div key={i} className="basis-full py-10 ml-6 sm:ml-10 ">
								<ArticleItem article={article} key={i} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default EmblaCarouselHomepage;

{
	/* {data?.items.map((user, i) => (
							<div key={i} className="basis-full py-10 ml-10 sm:ml-24 ">
								<Link
									href={`/creators/${user.id}`}
									className="relative h-[300px] block mx-auto aspect-[8/10] overflow-hidden rounded-3xl shadow-xl group">
									<div className="absolute top-0 left-0 w-full h-full z-50 group-hover:opacity-15 bg-blackSecond opacity-0 transition-opacity duration-300"></div>
									<img
										src={user.avatar_url}
										alt={`${user.first_name} ${user.last_name}`}
										className="object-cover object-center  w-full h-full"
									/>
									<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-50"></div>
									<div className="absolute bottom-2 left-0 w-full h-1/3 px-6 pt-8 flex flex-col justify-end items-start pb-3">
										<p className="flex flex-col font-semibold">
											<span className="text-2xl">{user.first_name}</span>
										</p>
										{user.skill_list.length !== 0 && (
											<div className="flex justify-start items-center gap-2 mt-2">
												{user?.skill_list?.slice(0, 3).map((skill, i) => (
													<p
														key={i}
														className="text-[10px] border border-whiteSecond rounded-full px-2">
														{skill.skill_name}
													</p>
												))}
												<p className="text-xs">+{user.skill_list.length - 3}</p>
											</div>
										)}
									</div>
								</Link>
							</div>
						))} */
}
