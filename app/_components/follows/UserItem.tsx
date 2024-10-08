import { GetUserType } from "@/app/_redux/features/authApiSlice";
import Image from "next/image";
import Link from "next/link";
import FollowBtn from "./FollowBtn";

interface UserItemProps {
  user: GetUserType | undefined;
}

export default function UserItem({ user }: UserItemProps) {
  return (
    <div className="w-full max-w-[340px] h-[340px] shadow-md rounded-lg bg-white overflow-hidden">
      <div className="relative h-[35%] w-full">
        <div className="h-full w-full">
          <Image
            fill
            src={user?.background_image_url || ""}
            className="bg-blue-500 object-cover object-center  h-full w-full"
            alt={`${user?.first_name} ${user?.last_name}`}
          />
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-1/2 w-4/12 max-w-[113px] aspect-square rounded-full overflow-hidden border-[3px] border-white bg-white ">
          <Image
            fill
            src={user?.avatar_url || ""}
            className="object-cover "
            alt={`${user?.first_name} ${user?.last_name}`}
          />
        </div>
      </div>
      <div className="flex w-full justify-center items-center flex-col mt-10 px-4 text-center">
        <p className="text-xl font-medium line-clamp-1">
          {user?.first_name} {user?.last_name}{" "}
        </p>
        <p className="text-slate-400 mt-2 text-center line-clamp-2 text-sm">
          {user?.follower_count} obserswujących
        </p>
      </div>
      <div className="w-full flex justify-center items-center gap-8 mt-3">
        <div className="">
          <p className="flex justify-center items-center gap-3">
            <i className="bi bi-newspaper text-lg"></i>
            <span className="font-medium text-lg">{user?.article_count}</span>
          </p>
        </div>
        <div>
          <p className="flex justify-center items-center gap-3">
            <i className="bi bi-star text-lg"></i>
            <span className="font-medium text-lg">
              {user?.avg_rating_from_articles}
            </span>
          </p>
        </div>
      </div>
      <div className="flex w-full justify-between items-center px-4 mt-5">
        <FollowBtn user={user} />

        <Link
          href={`/creators/${user?.id}`}
          className="px-5 py-3 text-sm group "
        >
          <p className="relative before:absolute before:w-full before:bottom-0 before:left-0 before:h-[1px] before:bg-black before:scale-x-0 group-hover:before:scale-x-100 before:origin-left before:transition-all before:duration-300">
            Wyświetl profil
          </p>
        </Link>
      </div>
    </div>
  );
}
