import FollowMe from "@/app/_components/follows/FollowMe";

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <div>
      <FollowMe page={searchParams.page} />
    </div>
  );
}
