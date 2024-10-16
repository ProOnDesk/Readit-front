"use client";

import clsx from "clsx";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { useGetUsersTopArticlesMutation } from "@/app/_redux/features/creatorsApiSlice";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [getUsersTopFollows, { isLoading, data }] =
    useGetUsersTopArticlesMutation();
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(
    function () {
      getUsersTopFollows({ page: 1, size: 16 });
    },
    [getUsersTopFollows]
  );

  console.log(data);    

  return (
    <section className="max-w-5xl mx-auto text-white dark:text-webYellow w-full px-3 py-24">
      <div className="flex flex-col items-center">
        <div className="overflow-hidden flex-grow" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom w-full md:w-full">
            {data?.items.map((user, i) => (
              <div
                key={i}
                className="basis-full md:basis-1/2 lg:basis-1/3 flex-grow flex-shrink-0 px-3 "
              >
                <div className="bg-webAccentWhite dark:bg-black flex flex-col h-[380px] text-black rounded-2xl p-6 dark:text-webYellow">
                  <div className="relative w-full flex justify-start items-center mb-2">
                    <div className="absolute bottom-0 left-0 -translate-y-full -translate-x-full h-3 w-3 bg-webPrimary rounded-tr-lg"></div>
                    <div>
                      <p className="text-webBackground text-2xl font-semibold ml-1 dark:text-webYellow">
                        {user.first_name}
                      </p>
                      <div className="w-full h-3 bg-webPrimary rounded-bl-lg"></div>
                    </div>
                  </div>
                  <div className="font-barlow">{user.last_name}</div>
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
