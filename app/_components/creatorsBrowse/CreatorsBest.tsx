import React from "react";

export default function CreatorsBest() {
  return (
    <div className="w-full flex justify-center items-center text-center py-20 md:py-48 md:justify-end px-6 md:px-14 italic sm500:text-lg md:text-xl max-w-[1800px] mx-auto">
      <div className=" flex justify-center items-center gap-10 h-full">
        <p className="max-w-[650px] md:text-right">
          Setki <span className="text-mainGreenSecond">najlepszych</span> i
          najbardziej zaangażowanych w swoje dzieła użytkowników. Znajdziesz
          tutaj zarówno twórców z długim stażem i{" "}
          <span className="text-mainGreenSecond">setkami prac</span>, jak i
          tych, którzy dopiero zaczynają swoją{" "}
          <span className="text-mainGreenSecond">przygodę z nami</span>.
          Przeglądaj profile, czytaj fascynujące treści i śledź najnowsze
          publikacje swoich ulubionych twórców. Wspieraj ich pracę, komentuj, i
          stań się częścią tej{" "}
          <span className="text-mainGreenSecond">wyjątkowej społeczności</span>.
          To wszystko w jednym miejscu - na Read
          <span className="text-mainGreenSecond">It</span>.
        </p>
        <div className="w-1 h-[180px] bg-mainGreen hidden md:block" />
      </div>
    </div>
  );
}
