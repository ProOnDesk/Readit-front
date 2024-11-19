"use client";

import { useAppSelector } from "@/app/_redux/hooks";
import Link from "next/link";
import React from "react";

export default function ActionBtn() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <>
      {!isAuthenticated ? (
        <Link
          href="/register"
          className="text-center font-medium rounded-full bg-mainGreen text-white hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2 self-center lg:self-start"
        >
          Dołącz teraz
        </Link>
      ) : (
        <Link
          href="/app/create"
          className="text-center font-medium rounded-full bg-mainGreen text-white hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2 self-center lg:self-start"
        >
          Zacznij tworzyć
        </Link>
      )}
    </>
  );
}
