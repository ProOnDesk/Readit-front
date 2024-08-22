import React from "react";
import BurgerBtn from "./BurgerBtn";
import Logo from "../Logo";
import Link from "next/link";
import NavBrowseInput from "./NavBrowseInput";
import { FaUserCircle } from "react-icons/fa";
import Dropdown from "../ui/Dropdown";

export default function Navigation() {
  const isAuth = true;

  return (
    <div className="fixed top-0 left-0 w-full h-16 md:h-20 shadow-md  z-[60] bg-white px-4 sm:px-8">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center h-full">
        <div className="flex justify-center items-center h-full gap-8">
          <Logo />
          <div className="justify-center items-center h-full gap-8 hidden lg1100:flex">
            <Link href="/browse" className="group text-center py-2">
              <span className="relative font-medium before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300 ">
                Materiały
              </span>
            </Link>
            <Link href="/creators" className="group  text-center py-2">
              <span className="relative font-medium before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
                Twórcy
              </span>
            </Link>
            <NavBrowseInput />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Link
            href="/app/create"
            className="group  text-center py-2 hidden md:block"
          >
            <span className="relative font-medium before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
              Stwórz coś!
            </span>
          </Link>
          {isAuth ? (
            <div className="hidden sm500:block">
              <Dropdown
                label={
                  <div className="font-medium">
                    <p className="flex justify-center items-center gap-3">
                      Imie Nazwisko <FaUserCircle size={24} />
                    </p>
                  </div>
                }
              >
                {" "}
                <Link
                  href="/app/profile/26969696969"
                  className="block w-full group focus:outline-none py-4 font-medium "
                >
                  <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300 text-nowrap">
                    Mój profil
                  </span>
                </Link>
                <Link
                  href="/app/226262662/content"
                  className="block w-full group focus:outline-none py-4 font-medium"
                >
                  <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300 text-nowrap">
                    Moje materiały
                  </span>
                </Link>
                <Link
                  href="/app/226262662/follows"
                  className="block w-full group focus:outline-none py-4 font-medium"
                >
                  <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300 text-nowrap">
                    Moje obserwacje
                  </span>
                </Link>
                <Link
                  href="/app/26262662/account"
                  className="block w-full group focus:outline-none py-4 font-medium"
                >
                  <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300 text-nowrap">
                    Konto
                  </span>
                </Link>
                <Link
                  href="/"
                  className="block w-full group focus:outline-none py-4 font-medium text-red-500"
                >
                  <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-red-500 before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
                    Wyloguj
                  </span>
                </Link>
              </Dropdown>
            </div>
          ) : (
            <div className="hidden md:flex h-full justify-between items-center gap-1">
              <Link href="/login" className="group  text-center px-6 py-2">
                <span className="relative font-medium before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
                  Zaloguj
                </span>
              </Link>
              <Link
                href="/register"
                className="text-center rounded-full bg-mainGreen text-white font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2"
              >
                Zarejestruj
              </Link>
            </div>
          )}
          <BurgerBtn />
        </div>
      </div>
    </div>
  );
}
