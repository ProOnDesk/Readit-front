import Link from "next/link";
import Logo from "../Logo";
import BurgerBtn from "./BurgerBtn";
import LoginBtns from "./LoginBtns";
import NavBrowseInput from "./NavBrowseInput";

export default function Navigation() {
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
          <LoginBtns />
          <BurgerBtn />
        </div>
      </div>
    </div>
  );
}
