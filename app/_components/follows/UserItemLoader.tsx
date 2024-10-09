import { GetUserType } from "@/app/_redux/features/authApiSlice";
import Image from "next/image";
import Link from "next/link";
import FollowBtn from "./FollowBtn";

export default function UserItemLoader() {
  return (
    <div className="w-full max-w-[340px] h-[340px] shadow-md rounded-lg bg-white overflow-hidden">
      <div className="relative h-[35%] w-full">
        <div className="h-full w-full">
          <div className="bg-gray-300 object-cover object-center  h-full w-full" />
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-1/2 w-4/12 max-w-[113px] aspect-square rounded-full overflow-hidden border-[3px] border-white  bg-gray-200"></div>
      </div>
      <div className="flex w-full justify-center items-center flex-col mt-10 px-4 text-center">
        <p className="block h-7 "></p>
        <p className="h-5 mt-2"></p>
      </div>
      <div className="w-full flex justify-center items-center gap-8 mt-3 text-slate-300">
        <div className="">
          <p className="flex justify-center items-center gap-3">
            <i className="bi bi-newspaper text-lg"></i>
            <span className="font-medium text-lg">--</span>
          </p>
        </div>
        <div>
          <p className="flex justify-center items-center gap-3">
            <i className="bi bi-star text-lg"></i>
            <span className="font-medium text-lg">--</span>
          </p>
        </div>
      </div>
      <div className="flex w-full justify-between items-center px-6 mt-5">
        <div className="bg-gray-300 rounded-full w-[113px] h-[47px] text-sm font-semibold"></div>
      </div>
    </div>
  );
}
