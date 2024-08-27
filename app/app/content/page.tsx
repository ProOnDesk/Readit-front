"use client";

import { useRetrieveUserQuery } from "@/app/_redux/features/authApiSlice";
import React from "react";

export default function Page() {
  const { data: user, isLoading } = useRetrieveUserQuery();

  return <div>Materiały uzytkownika o id: {user?.id}</div>;
}
