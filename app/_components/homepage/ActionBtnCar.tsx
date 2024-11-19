"use client";

import { useAppSelector } from "@/app/_redux/hooks";
import Link from "next/link";
import React from "react";

export default function ActionBtnCar() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <>
      {!isAuthenticated && (
        <Link
          href="/register"
          className="text-center rounded-full  bg-blackSecond text-white font-medium hover:bg-blackFour transition-colors duration-300 px-6 py-2"
        >
          Zacznij już dziś!
        </Link>
      )}
    </>
  );
}
