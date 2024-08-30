/* eslint-disable @next/next/no-img-element */
import { User } from "@/app/_redux/features/authApiSlice";
import React from "react";
import ProfileImageUploader from "./ProfileImageUploader";

interface ProfileImageProps {
  user: User | undefined;
}

export default function ProfileImage({ user }: ProfileImageProps) {
  return (
    <div className="relative w-full bg-white max-w-[1200px] mx-auto">
      <div className="w-full h-[40vh] overflow-hidden">
        <ProfileImageUploader uploadFor="background" user={user} />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md900:left-32 lg:left-44 lg1200:left-32 translate-y-1/2 border-[10px] border-white rounded-full overflow-hidden bg-white w-40 h-40 md900:w-44 md900:h-44">
        <ProfileImageUploader uploadFor="profile" user={user} />
      </div>
    </div>
  );
}
