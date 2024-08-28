"use client";

import useVerify from "@/app/_hooks/useVerify";
import { useRetrieveUserQuery } from "@/app/_redux/features/authApiSlice";
import { useAppSelector } from "@/app/_redux/hooks";
import Link from "next/link";
import Dropdown from "../ui/Dropdown";
import LogoutBtn from "./LogoutBtn";

export default function LoginBtns() {
  useVerify();
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const { data: user } = useRetrieveUserQuery();

  return (
    <>
      {isAuth ? (
        <div className="hidden sm500:block">
          <Dropdown
            label={
              <div className="font-medium">
                <p className="flex justify-center items-center gap-3">
                  {user?.first_name} {user?.last_name}{" "}
                  <img
                    src={user?.avatar!}
                    className="h-[30px] w-[30px] rounded-full"
                    alt=""
                  />
                </p>
              </div>
            }
          >
            {" "}
            <Link
              href="/app/profile"
              className="block w-full group focus:outline-none py-4 font-medium "
            >
              <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300 text-nowrap">
                Mój profil
              </span>
            </Link>
            <Link
              href="/app/content"
              className="block w-full group focus:outline-none py-4 font-medium"
            >
              <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300 text-nowrap">
                Moje materiały
              </span>
            </Link>
            <Link
              href="/app/follows"
              className="block w-full group focus:outline-none py-4 font-medium"
            >
              <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300 text-nowrap">
                Moje obserwacje
              </span>
            </Link>
            <Link
              href="/app/account"
              className="block w-full group focus:outline-none py-4 font-medium"
            >
              <span className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300 text-nowrap">
                Konto
              </span>
            </Link>
            <LogoutBtn />
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
    </>
  );
}
