import React from "react";

export default function BrowseHeader() {
  return (
    <div className="w-full bg-blackThird" id="browseHeader">
      <div className="w-full flex justify-center items-center text-center py-20 md:py-32 md:justify-start px-6 md:px-14 sm500:text-lg md:text-xl max-w-[1800px] mx-auto text-whiteSecond">
        <div className=" flex justify-center items-center gap-10 h-full">
          <div className="w-1 h-[270px] bg-mainGreen hidden md:block" />
          <div>
            <h2 className="font-bold text-2xl sm500:text-3xl sm:text-4xl md:text-left mb-4">
              Materiały tworzone z myślą o Tobie
            </h2>
            <p className="max-w-[650px] md:text-left">
              Odkrywaj materiały stworzone przez{" "}
              <span className="text-mainGreenSecond">
                {" "}
                prawdziwych pasjonatów
              </span>{" "}
              i <span className="text-mainGreenSecond">ekspertów</span> w swoich
              dziedzinach. Każdy z materiałów został starannie opracowany, aby{" "}
              <span className="text-mainGreenSecond">dostarczyć Ci</span>{" "}
              najbardziej aktualną, rzetelną i wartościową wiedzę. Niezależnie
              od tego, czy poszukujesz informacji do rozwoju zawodowego, czy też
              chcesz{" "}
              <span className="text-mainGreenSecond">
                poszerzyć swoje horyzonty
              </span>{" "}
              osobiste, znajdziesz u nas treści, które są nie tylko inspirujące,
              ale także praktyczne i użyteczne.
              <span className="text-mainGreenSecond">
                {" "}
                Daj się zainspirować
              </span>{" "}
              i wyrusz w podróż ku nowym{" "}
              <span className="text-mainGreenSecond"> odkryciom</span>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
