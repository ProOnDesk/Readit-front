/* eslint-disable @next/next/no-img-element */
"use client";

import {
  useGetUserByIdQuery,
  useRetrieveUserQuery,
} from "@/app/_redux/features/authApiSlice";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Page({ params }: { params: { profileId: string } }) {
  const profileId = params.profileId;
  // const { data: user } = useRetrieveUserQuery();
  const { data: user } = useGetUserByIdQuery({ id: profileId });
  console.log(user);

  return (
    <div className="max-w-[1800px] mx-auto w-full h-full min-h-screen">
      <div className="relative w-full">
        <div className="w-full h-[40vh] overflow-hidden">
          <img src="/bg.png" className="w-full h-full" alt="" />
        </div>
        <div className="absolute bottom-0 left-10 translate-y-1/2 border-[10px] border-white rounded-full overflow-hidden bg-white w-52 h-52">
          <img
            src={user?.avatar}
            alt={`${user?.first_name} ${user?.last_name}`}
            className="w-full h-full rounded-full "
          />
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}
