"use client";

import clsx from "clsx";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { use, useCallback, useEffect, useState } from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { useGetUsersTopArticlesMutation } from "@/app/_redux/features/creatorsApiSlice";
import Image from "next/image";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [getUsersTopFollows, { isLoading, data }] =
    useGetUsersTopArticlesMutation();
  const [emblaRef] = useEmblaCarousel(
    options,
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
      }),
    ] // automatyczne przewijanie co 3 sekundy
  );
  // const [isPlaying, setIsPlaying] = useState(true);

  // useEffect(() => {
  //   const autoScroll = emblaApi?.plugins()?.autoScroll;
  //   if (!autoScroll) return;

  //   setIsPlaying(autoScroll.isPlaying());
  //   emblaApi
  //     .on("autoScroll:play", () => setIsPlaying(true))
  //     .on("autoScroll:stop", () => setIsPlaying(false))
  //     .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  // }, [emblaApi]);

  // // const onButtonAutoplayClick = useCallback(
  // //   (callback: () => void) => {
  // //     const autoplay = emblaApi?.plugins()?.autoplay;
  // //     if (!autoplay) return;

  // //     const resetOrStop =
  // //       autoplay.options.stopOnInteraction === false
  // //         ? autoplay.reset
  // //         : autoplay.stop;

  // //     resetOrStop();
  // //     callback();
  // //   },
  // //   [emblaApi]
  // // );

  // // const toggleAutoplay = useCallback(() => {
  // //   const autoplay = emblaApi?.plugins()?.autoplay;
  // //   if (!autoplay) return;

  //   const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
  //   playOrStop();
  // }, [emblaApi]);

  useEffect(
    function () {
      getUsersTopFollows({ page: 1, size: 10 });
    },
    [getUsersTopFollows]
  );

  console.log(data);

  return (
    <section className=" relative max-w-[1800px] mx-auto text-white dark:text-webYellow w-full">
      <div className="absolute top-0 left-0 w-full h-full z-50"></div>
      <div className="flex flex-col items-center w-full h-full">
        <div className="overflow-hidden flex-grow w-full" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom w-full">
            {data?.items.map((user, i) => (
              <div key={i} className="basis-full py-10 ml-10 sm:ml-24">
                <div className="relative h-[300px] mx-auto aspect-[8/10] overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src={user.avatar_url}
                    alt={`${user.first_name} ${user.last_name}`}
                    className="object-cover object-center  w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                  <div className="absolute bottom-2 left-0 w-full h-1/3 px-6 pt-8">
                    <p className="flex flex-col font-semibold">
                      <span className="text-2xl">{user.first_name}</span>
                    </p>
                    <div className="flex justify-start items-center gap-2 mt-2">
                      <p className="text-[10px] border border-whiteSecond rounded-full px-2">Skill</p>
                      <p className="text-[10px] border border-whiteSecond rounded-full px-2">SkillSkill</p>
                      <p className="text-[10px] border border-whiteSecond rounded-full px-2">Skill</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
