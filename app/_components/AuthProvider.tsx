"use client";

import { redirect } from "next/navigation";
import { useAppSelector } from "../_redux/hooks";

export default function AuthProvider() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // if (!isAuthenticated) {
  //   redirect("/login");
  // }

  return null;
}
