import Link from "next/link";
import EmblaCarouselHomepage from "./EmblaCarouselHomepage";
import { EmblaOptionsType } from "embla-carousel";

export default function CarouselHomepage() {
  const OPTIONS: EmblaOptionsType = {
    align: "center",
    loop: true,
    duration: 500,
    slidesToScroll: 1,
    dragFree: true,
  };

  return (
    <div className="max-w-[1800px] w-full mx-auto  bg-white">
      <div className="flex flex-col justify-center items-center gap-y-6 sm600:gap-y-8 my-10 sm500:my-16">
        {" "}
        <p className="px-6 sm500:px-10 sm600:mx-20 md:px-32 md900:px-44 xl:text-3xl xl1396:text-4xl text-xl sm500:text-2xl  text-center text-blackSecond font-bold tracking-wide">
          Zanurz się w treściach, które poszerzą Twoją wiedzę i zainspirują do
          działania!
        </p>
        <EmblaCarouselHomepage options={OPTIONS} />
        <Link
          href="/register"
          className="text-center rounded-full  bg-blackSecond text-white font-medium hover:bg-blackFour transition-colors duration-300 px-6 py-2"
        >
          Zacznij już dziś!
        </Link>
      </div>
    </div>
  );
}
