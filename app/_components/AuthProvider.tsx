import React from "react";
import { useAppSelector } from "../_redux/hooks";
import { redirect } from "next/navigation";
import Spinner from "./ui/Spinner";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, isAuthenticated } = useAppSelector((state) => state.auth);

  if (isLoading) return <Spinner />;

  if (!isAuthenticated) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
