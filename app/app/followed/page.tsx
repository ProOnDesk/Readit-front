import FollowedByMe from "@/app/_components/follows/FollowedByMe";

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <div>
      <FollowedByMe page={searchParams.page} />
    </div>
  );
}
