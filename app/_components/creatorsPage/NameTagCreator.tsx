import { User } from "@/app/_redux/features/authApiSlice";
import FollowersAndButton from "./FollowersAndButton";
import { Rating } from "@mui/material";

interface NameTagProps {
  user: User | undefined;
}

export default function NameTagCreator({ user }: NameTagProps) {
  return (
    <div className="pt-28 md900:px-10 lg:px-20 lg1200:px-12 bg-white max-w-[1200px] mx-auto pb-10 lg1200:rounded-bl-2xl lg1200:rounded-br-2xl lg1200:shadow-lg">
      <h2 className=" font-semibold text-3xl text-center md900:text-4xl md900:text-left">
        {user?.first_name} {user?.last_name}
      </h2>
      {user?.short_description.length !== 0 && (
        <div className="px-10 flex justify-center items-center mt-5 md900:justify-start md900:px-0 md900:mt-1">
          <div className="py-4 text-center flex gap-2 group md900:text-left">
            <p className="text-lg font-medium flex justify-center items-center w-full mx-auto">
              {user?.short_description}
            </p>
          </div>
        </div>
      )}
      <p className="flex justify-center items-center gap-2 text-stone-400 mt-3 md900:justify-start md900:mt-1">
        {user?.sex} <span className="h-1 w-1 bg-stone-300 rounded-full" />{" "}
        {user?.email}
      </p>
      <div className="flex justify-center md900:justify-start items-center gap-3 text-stone -400 mt-1">
        <p className="">{user?.avg_rating_from_articles.toPrecision(3)}</p>
        <Rating
          value={user?.avg_rating_from_articles}
          readOnly
          precision={0.1}
          size="small"
        />
      </div>
      <FollowersAndButton user={user} />
    </div>
  );
}
