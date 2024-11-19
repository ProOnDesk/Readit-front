/* eslint-disable @next/next/no-img-element */

import ActionBtn from "./ActionBtn";
import ArrowBtn from "./ArrowBtn";

export default function HeaderHomepage() {
  return (
    <div className="w-full bg-blackSecond h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="relative mx-auto max-w-[1800px] w-full h-full pb-8 md:pb-0">
        <div className="flex flex-col justify-center items-center h-full w-full text-center lg:text-left lg:items-start">
          <img
            src="/laptop.jpg"
            className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[70%] md:h-[80%] bg-cover bg-center object-cover overflow-hidden brightness-[0.4] pb-8 md:pb-0 lg:hidden"
            alt=""
          />
          <div className="flex flex-col justify-center items-center gap-8 z-10 px-4 sm400:px-12 max-w-[530px] lg:max-w-full lg:justify-center lg:h-full lg:gap-10 lg:items-start">
            <h4 className="text-white  font-bold text-2xl sm500:text-3xl lg:text-4xl lg:max-w-[45%]">
              Zamień swoją wiedzę na zysk, odkrywając inspirujące treści
              tworzone przez innych.
            </h4>
            <p className="text-white sm500:text-lg lg:text-xl lg:max-w-[40%]">
              Zarejestruj się już dziś na{" "}
              <span className="font-semibold">Readit</span>, zacznij swoją
              podróż jako twórca lub odkrywca!
            </p>
            <ActionBtn />
          </div>
        </div>

        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 h-[75%] xl:h-[85%] max-h-[600px]">
          <img
            src="/tlo.png"
            className="w-full h-full bg-cover bg-center object-cover overflow-hidden brightness-[0.7]"
            alt=""
          />
        </div>

        <ArrowBtn />
      </div>
    </div>
  );
}
