/* eslint-disable @next/next/no-img-element */

export default function BecomeCreators() {
  return (
    <div className="flex flex-col justify-center items-center  w-full py-14 md:py-20 max-w-[1800px]">
      <div className=" w-full mx-auto flex flex-col justify-center items-center gap-10 lg:gap-32 md:flex-row md:px-12">
        <div className="flex flex-col items-center px-4 md:order-2 lg:max-w-[400px]">
          <h4 className="text-2xl md:text-xl md800:text-4xl text-blackSecond font-bold text-center mt-8 mb-2 md:mb-4 tracking-wide">
            Zostań twórcą!
          </h4>

          <p className="text-center px-4 font-semibold text-sm sm500:text-base md800:text-lg lg:text-xl sm500:px-12 md:px-0">
            Twórcy na <span className="text-mainGreen">ReadIt</span> to osoby,
            które dzielą się swoją wiedzą i pasją z innymi, tworząc wartościowe
            materiały w formie artykułów, e-booków, kursów czy poradników.
            Publikują swoje treści na platformie, umożliwiając innym
            użytkownikom dostęp do unikalnych i inspirujących informacji
          </p>
        </div>
        <img
          src="/man.png"
          className="w-[70%] max-w-[300px] md:order-1"
          alt=""
        />
      </div>
    </div>
  );
}
