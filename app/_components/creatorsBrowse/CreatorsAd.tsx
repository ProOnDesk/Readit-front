import Link from "next/link";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";

export default function CreatorsAd() {
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
    <div>
      <h3>Zostań Twórcą na ReadIt: Dziel się Pasją i Zarabiaj!</h3>
      <div>
        <EmblaCarousel options={OPTIONS} />
      </div>
      <p>
        Podziel się swoją wiedzą i pasją, dołączając do grona twórców na ReadIt!
        Twórz unikalne materiały, inspiruj innych i zarabiaj na tym, co kochasz.
        Zostań twórcą już dziś i odkryj, jak Twoje treści mogą zmienić świat!
      </p>
      <Link href="/app/create">Zacznij tworzyć</Link>
    </div>
  );
}
