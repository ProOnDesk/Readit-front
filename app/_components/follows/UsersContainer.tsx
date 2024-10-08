import { GetUserTypePaginated } from "@/app/_redux/features/authApiSlice";
import UserItem from "./UserItem";

interface FollowedByMeProps {
  data: GetUserTypePaginated | undefined;
}

export default function UsersContainer({ data }: FollowedByMeProps) {
  console.log(data);

  return (
    <div className="w-full h-fit grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center mx-auto justify-center max-w-[680px] lg:max-w-[1020px] xl:max-w-[1360px] transition-all duration-300 px-4">
      {data?.items.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
