import Image from "next/image";
import React from "react";

export default function CreatorsBest() {
  return (
    <div className="w-full flex justify-center items-center text-center py-20 sm500:py-28 lg:py-36  px-6 md:px-14 sm500:text-lg md:text-xl mx-auto bg-blackThird text-whiteSecond" id="browseHeader">
      <div className="max-w-[1024px] mx-auto w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full hidden lg:w-1/2 h-full max-h-[250px] lg:flex justify-center items-center pr-20">
          <img
            src={"./chłop_w_bokserkach.svg"}
            className="h-full w-full max-w-[300px] max-h-[300px]"
            alt="Men in shorts with a laptop and a cup of coffee in his hands sitting on a chair and meeting online with a coworkers"
          />
        </div>
        <div className="flex justify-center items-center gap-3 lg:w-1/2">
          <div className="max-w-[510px]  flex justify-center items-center flex-col gap-5 h-full">
            <p className="text-xl sm400:text-2xl">
              Poznaj twórców, którzy inspirują i dzielą się swoją wiedzą!
            </p>
            <p className="">
              Oto nasi twórcy, Ludzie z pasją, którzy tworzą wartościowe treści,
              by inspirować i pomagać innym. Sprawdź ich prace i odkryj coś
              nowego!
            </p>
          </div>
          <div className="w-1 h-[200px] bg-mainGreen hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
