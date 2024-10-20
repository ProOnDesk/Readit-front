import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaFacebook } from "react-icons/fa";
import { RiLinkedinLine, RiTwitterXFill } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";

interface FooterHomepageProps {
  colorVariant?: "light" | "dark";
}

export default function FooterHomepage({
  colorVariant = "light",
}: FooterHomepageProps) {
  return (
    <div
      //border bedzie do usuniecia jak homepage bedzie gotowy (border-t border-t-slate-200) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
      className={clsx(
        "w-full text-black border-t border-t-slate-200",
        colorVariant === "dark"
          ? "text-whiteSecond bg-blackSecond"
          : "text-black bg-white"
      )}
    >
      <footer className="flex flex-col lg:flex-row justify-center items-center lg:gap-5 py-10 px-4 sm500:px-8  max-w-[1800px] mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start">
          <div className="relative h-10 w-[140px]">
            <Image
              src={
                colorVariant === "dark"
                  ? "/readit-logo-white.png"
                  : "/Readit-logo.png"
              }
              fill
              alt="logo Readit"
              className="object-contain h-full"
            />
          </div>
          <p className="mt-8 sm500:mt-6 text-center lg:text-left max-w-[550px]">
            ReadIt to platforma, na której twórcy dzielą się wiedzą, a
            użytkownicy odkrywają wartościowe treści. Twórz, publikuj i
            zarabiaj, lub czerp inspirację z unikalnych materiałów dostępnych na
            wyciągnięcie ręki.
          </p>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm500:grid-cols-2 lg:grid-cols-3 lg:place-items-end pt-8 px-2 gap-1 ">
          <div className="flex flex-col justify-start items-center sm500:items-start gap-1">
            <Link
              href="/creators"
              className="font-bold hover:text-mainGreen transition-colors duration-300 py-1"
            >
              Twórcy
            </Link>
            <Link
              href="/app/create"
              className="font-bold hover:text-mainGreen transition-colors duration-300 py-1"
            >
              Twórz w ReadIt
            </Link>
            <Link
              href="/browse"
              className="font-bold hover:text-mainGreen transition-colors duration-300 py-1"
            >
              Materiały
            </Link>
          </div>
          <div className="flex flex-col justify-start items-center sm500:items-start gap-1">
            <Link
              href="/help"
              className="font-bold hover:text-mainGreen transition-colors duration-300 py-1"
            >
              Centrum pomocy
            </Link>
            <Link
              href="/terms"
              className="font-bold hover:text-mainGreen transition-colors duration-300 py-1"
            >
              Regulamin
            </Link>
            <Link
              href="/about"
              className="font-bold hover:text-mainGreen transition-colors duration-300 py-1"
            >
              O nas
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 lg:mt-1 place-self-start lg:justify-self-end">
            <p className="text-center">Znajdziesz nas na:</p>
            <div className="flex justify-center items-center gap-1 mt-1">
              <Link
                href="https://www.facebook.com/"
                className="p-1 hover:text-mainGreen transition-colors duration-300"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="p-1 hover:text-mainGreen transition-colors duration-300"
              >
                <SlSocialInstagram />
              </Link>
              <Link
                href="https://twitter.com/"
                className="p-1 hover:text-mainGreen transition-colors duration-300"
              >
                <RiTwitterXFill />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                className="p-1 hover:text-mainGreen transition-colors duration-300"
              >
                <RiLinkedinLine />
              </Link>
              <Link
                href="https://discord.com/"
                className="p-1 hover:text-mainGreen transition-colors duration-300"
              >
                <FaDiscord />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
