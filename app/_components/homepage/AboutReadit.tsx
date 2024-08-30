import { PiChatsThin } from "react-icons/pi";
import { PiLightbulbThin } from "react-icons/pi";
import { PiUsersThreeThin } from "react-icons/pi";
import { PiMoneyWavyThin } from "react-icons/pi";

export default function AboutReadit() {
  return (
    <div className="flex flex-col my-10 gap-y-4 max-w-[1800px] mx-auto">
      <h2 className="flex flex-col items-center my-10  text-3xl font-medium text-blackSecond ">
        O Readit.
      </h2>
      <p className="px-6 tracking-wide leading-tight font-light  text-blackSecond text-xl max-w-[1050px]  mx-auto text-center">
        <span className="text-mainGreen font-medium">Readit</span> to
        rewolucyjny projekt stworzony z myślą o ludzicach, którzy pragną dzielić
        się swoją wiedzą i pasją z innymi. To platforma, która{" "}
        <span className="text-mainGreen font-medium">
          umożliwia tworzenie i publikowanie artykułów
        </span>{" "}
        na różnorodne tematy - od technologii po zdrowie i edukację.
      </p>

      <div className="flex flex-col md:flex-row flex-wrap md:justify-center md:items-center gap-y-8 gap-x-10 mt-12 max-w-[1 200px] lg:mx-auto px-10">
        <div className="flex flex-row text-left lg:text-center lg:px-10 md:flex-col justify-start items-center text-blackSecond gap-x-4 group md:w-[310px]">
          <span className="text-4xl md:text-5xl group-hover:text-mainGreenSecond transition-colors duration-300">
            <PiChatsThin />
          </span>
          <p className="text-lg md:text-xl font-light text-center">
            Komunikacja i zdobywanie nowej wiedzy.
          </p>
        </div>
        <div className="flex flex-row text-left lg:text-center lg:px-10 md:flex-col justify-start items-center text-blackSecond gap-x-4 group md:w-[310px]">
          <span className="text-4xl md:text-5xl group-hover:text-mainGreenSecond transition-colors duration-300">
            <PiLightbulbThin />
          </span>
          <p className="text-lg md:text-xl font-light  ">
            Pomysły, innowacje i inspirację.
          </p>
        </div>
        <div className="flex flex-row text-left lg:text-center lg:px-10 md:flex-col justify-start items-center text-blackSecond gap-x-4 group md:w-[310px]">
          <span className="text-4xl md:text-5xl group-hover:text-mainGreenSecond transition-colors duration-300">
            <PiMoneyWavyThin />
          </span>
          <p className="text-lg md:text-xl font-light  ">
            Korzyści dla twórcow{" "}
          </p>
        </div>
        <div className="flex flex-row text-left lg:text-center lg:px-10 md:flex-col justify-start items-center text-blackSecond gap-x-4 group md:w-[310px]">
          <span className="text-4xl md:text-5xl group-hover:text-mainGreenSecond transition-colors duration-300">
            <PiUsersThreeThin />
          </span>
          <p className="text-lg md:text-xl font-light ">
            Społeczności użytkowników.
          </p>
        </div>
      </div>
      <p className="py-12 px-6  text-blackSecond tracking-wide leading-tight font-light text-xl md:px-10 text-center max-w-[1100px] mx-auto">
        Lorem ipsum dolor sit, amet consectetur.{" "}
        <span className="text-mainGreen">Modi saepe</span> minima Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Porro labore, possimus
        laudantium rem iste reiciendis!
      </p>
    </div>
  );
}
