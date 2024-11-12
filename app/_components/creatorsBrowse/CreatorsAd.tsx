import Link from "next/link";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";

export default function CreatorsAd() {
  const OPTIONS: EmblaOptionsType = {
    align: "center",
    loop: true,
    duration: 500,
    slidesToScroll: 1,
    dragFree: true,
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="font-bold text-2xl sm550:text-3xl  md:text-4xl text-center pb-16 pt-20 md:pt-24  px-4 sm550:px-8 max-w-[850px]">
        Zostań Twórcą na ReadIt: Dziel się Pasją i Zarabiaj!
      </h3>
      <div>
        <EmblaCarousel options={OPTIONS} />
      </div>
      <p className="font-bold lg:text-xl md:text-lg text-center py-14 px-4 sm550:px-6 md:px-8 max-w-[900px]">
        Podziel się swoją wiedzą i pasją, dołączając do grona twórców na ReadIt!
        Twórz unikalne materiały, inspiruj innych i zarabiaj na tym, co kochasz.
        Zostań twórcą już dziś i odkryj, jak Twoje treści mogą zmienić świat!
      </p>
      <Link
        href="/app/create"
        className="px-6 py-4 rounded-full bg-mainGreen hover:bg-mainGreenSecond transition-colors duration-300 text-white font-semibold shadow-md mx-auto md:mt-4 mb-16 md:mb-20"
      >
        Zacznij tworzyć
      </Link>
    </div>
  );
}
