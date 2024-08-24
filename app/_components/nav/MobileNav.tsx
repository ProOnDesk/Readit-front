import { useRetrieveUserQuery } from "@/app/_redux/features/authApiSlice";
import { useAppSelector } from "@/app/_redux/hooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import LogoutBtn from "./LogoutBtn";

interface MobileNavProps {
  closeNav: () => void;
}

export default function MobileNav({ closeNav }: MobileNavProps) {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const { data: user } = useRetrieveUserQuery();

  return (
    <div className="text-webAccentWhite dark:text-webYellow w-full h-full flex flex-col justify-between">
      <div>
        {isAuth && (
          <div className="font-medium py-4 sm500:hidden">
            <p className="flex justify-center items-center gap-3">
              {user?.first_name} {user?.last_name}{" "}
              <img
                src={user?.avatar!}
                className="h-[30px] w-[30px] rounded-full"
                alt=""
              />
            </p>
          </div>
        )}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="focus:no-underline hover:no-underline  outline-none group">
              <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
                Materiały
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex text-black text-left" onClick={closeNav}>
                <Link
                  href="/browse"
                  className="w-full h-full text-base  py-4 px-7 focus:outline-none group "
                >
                  <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
                    Przeglądaj
                  </span>
                </Link>
              </div>
              <div className="flex text-black text-left" onClick={closeNav}>
                <Link
                  href="/app/create"
                  className="w-full h-full text-base  py-4 px-7 focus:outline-none group "
                >
                  <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
                    Stwórz
                  </span>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Link
          href="/creators"
          className="block w-full group focus:outline-none py-4 font-medium"
          onClick={closeNav}
        >
          <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
            Przeglądaj twórców
          </span>
        </Link>
        {!isAuth ? (
          <div className="w-full justify-between items-center mt-5 gap-4 font-medium flex md:hidden">
            <Link
              href="/login"
              className="group w-1/2 text-center"
              onClick={closeNav}
            >
              <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
                Zaloguj
              </span>
            </Link>
            <Link
              href="/register"
              className="w-1/2 text-center rounded-full bg-mainGreen hover:bg-mainGreenSecond text-white transition-colors duration-300 py-2"
              onClick={closeNav}
            >
              Zarejestruj
            </Link>
          </div>
        ) : (
          <>
            <div className="w-full h-[1px] bg-slate-200 my-2" />
            <Link
              href="/app/profile/26969696969"
              className="block w-full group focus:outline-none py-4 font-medium"
              onClick={closeNav}
            >
              <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
                Mój profil
              </span>
            </Link>
            <Link
              href="/app/226262662/content"
              className="block w-full group focus:outline-none py-4 font-medium"
              onClick={closeNav}
            >
              <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
                Moje materiały
              </span>
            </Link>
            <Link
              href="/app/226262662/follows"
              className="block w-full group focus:outline-none py-4 font-medium"
              onClick={closeNav}
            >
              <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
                Moje obserwacje
              </span>
            </Link>
            <Link
              href="/app/26262662/account"
              className="block w-full group focus:outline-none py-4 font-medium"
              onClick={closeNav}
            >
              <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
                Konto
              </span>
            </Link>
            <LogoutBtn closeNav={closeNav} />
          </>
        )}
      </div>
    </div>
  );
}
