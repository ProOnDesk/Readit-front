"use client";

import { User, useRetrieveUserQuery } from "@/app/_redux/features/authApiSlice";
import React from "react";
import Spinner from "../ui/Spinner";
import ProfileImage from "./ProfileImage";
import NameTag from "./NameTag";
import Skills from "./Skills";
import Description from "./Description";
import ProfileArticles from "./ProfileArticles";
import Packages from "./Packages";

export default function ProfileContent() {
  const { data: user, isLoading } = useRetrieveUserQuery();

  if (isLoading)
    return (
      <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center">
        <Spinner color="green" size="big" />;
      </div>
    );
  return (
    <div className="max-w-[1600px] mx-auto w-full h-full min-h-screen ">
      <ProfileImage user={user} />
      <NameTag user={user} />
      <Skills user={user} />
      <Description user={user} />
      <ProfileArticles user={user} />
      <Packages />
    </div>
  );
}
