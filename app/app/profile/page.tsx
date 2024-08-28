/* eslint-disable @next/next/no-img-element */
"use client";

import Description from "@/app/_components/profile/Description";
import NameTag from "@/app/_components/profile/NameTag";
import ProfileArticles from "@/app/_components/profile/ProfileArticles";
import ProfileImage from "@/app/_components/profile/ProfileImage";
import Skills from "@/app/_components/profile/Skills";
import Spinner from "@/app/_components/ui/Spinner";
import { useRetrieveUserQuery } from "@/app/_redux/features/authApiSlice";

export default function Page() {
  const { data: user, isLoading } = useRetrieveUserQuery();

  if (isLoading)
    return (
      <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center">
        <Spinner color="green" size="big" />;
      </div>
    );

  return (
    <div className="md900:bg-whiteSecond lg1200:pb-20">
      <div className="max-w-[1600px] mx-auto w-full h-full min-h-screen ">
        <ProfileImage user={user} />
        <NameTag user={user} />
        <Skills user={user} />
        <Description user={user} />
        <ProfileArticles user={user} />
      </div>
    </div>
  );
}
