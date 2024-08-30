import Link from "next/link";
import React from "react";

export default function CreatorsAd() {
  return (
    <div className="relative bg-blackSecond h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 bg-[url('/creatorBrowseAd.jpg')] w-full h-full bg-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80" />
      <div className="relative z-10 text-white w-full text-center px-6 flex justify-center items-center flex-col gap-5 max-w-[890px]">
        <h3 className="font-bold text-2xl sm500:text-3xl sm:text-4xl">
          Zostań twórcą na Read<span className="text-mainGreen">it</span>
        </h3>
        <p className="sm500:text-lg md:text-xl">
          Zyskujesz nie tylko możliwość zarabiania na swojej{" "}
          <span className="text-mainGreenSecond">wiedzy</span>, ale także szansę
          na zdobycie popularności w dynamicznie rozwijającej się{" "}
          <span className="text-mainGreenSecond">społeczności</span>. Twórz
          wartościowe, płatne{" "}
          <span className="text-mainGreenSecond">treści</span>, które docierają
          do szerokiego grona odbiorców.{" "}
          <span className="text-mainGreenSecond">Dołącz do nas</span> i
          przekształć swoje pasje w realne zyski – Twoje treści mogą inspirować
          tysiące, jednocześnie zapewniając Ci{" "}
          <span className="text-mainGreenSecond">dodatkowy dochód</span>.
        </p>
      </div>
      <Link
        href="/app/create"
        className="bg-mainGreen hover:bg-mainGreenSecond rounded-full px-5 py-2 text-white z-10 relative transition-colors duration-300 mt-10"
      >
        Przejdź do kreatora
      </Link>
    </div>
  );
}
