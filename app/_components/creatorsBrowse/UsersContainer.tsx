import { getCreatorsSearch } from "@/app/_actions/profileActions";
import UserItem from "../follows/UserItem";

interface UsersContainerProps {
  searchParams: { page: string; sort_by: string; value: string };
}

export default async function UsersContainer({
  searchParams,
}: UsersContainerProps) {
  const creators = await getCreatorsSearch(searchParams);

  console.log(creators);

  return (
    <div className="w-full h-fit grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center mx-auto justify-center max-w-[680px] lg:max-w-[1020px] xl:max-w-[1360px] mb-4">
      {creators?.items.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
}
