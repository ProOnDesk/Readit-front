/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import ArrowBtn from "./ArrowBtn";

export default function HeaderHomepage() {
  return (
    <div className="relative h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] w-full py-14 bg-blackSecond">
      <div className="max-w-[1800px] mx-auto flex flex-col justify-between h-full items-center">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-full w-full md:flex md:justify-center md:items-center">
            <img
              src="/homepage-big.jpg"
              className="w-full aspect-video bg-cover bg-center opacity-20 shadow-shadowNew object-cover h-[50vh]"
              alt=""
            />

            <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm px-10 text-center h-full w-full gap-4 sm500:gap-6 ">
              <h2 className=" text-2xl sm500:text-3xl md:text-4xl text-whiteSecond font-medium text-center	tracking-tight">
                Czytaj wartościowe materiały lub sam zostań twórcą na Read
                <span className="text-mainGreenSecond">it</span>!
              </h2>

              <p className="text-sm sm500:text-base md:text-xl md:text-center text-whiteSecond/75 tracking-tight">
                Tworząc treści na Readit, zyskujesz szansę dzielenia się swoją{" "}
                <span className="text-mainGreenSecond">wiedzą</span> i budowania
                kreatywnej społeczności, a przy okazji{" "}
                <span className="text-mainGreenSecond">zarabiasz</span>.
              </p>
            </div>
          </div>
          <div className="text-sm px-10 text-center hidden md:block md:justify-center md:items-center h-full w-full order-1 ">
            <p className="  md:text-xl md:text-center text-whiteSecond/75  tracking-tight">
              Na Read<span className="text-mainGreenSecond">it</span>{" "}
              znajdziesz setki materiałów z różnych dziedzin, które pomogą Ci
              rozwijać swoje umiejętności i pasje.  <span className="text-mainGreenSecond">Dołącz</span> do naszej społeczności
              i odkryj nieograniczone możliwości edukacyjne, dostępne na
              wyciągnięcie ręki.
            </p>
          </div>
        </div>
        <Link
          href="/register"
          className="md:self-start md:ml-20 text-center sm500:text-lg md:text-xl rounded-full bg-mainGreen text-white font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2 "
        >
          Dołącz się &rarr;
        </Link>
        <span />
        <ArrowBtn />
      </div>
    </div>
  );
}

// absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
