// import { useGetUserByIdQuery } from "@/app/_redux/features/authApiSlice";

export default function Page({ params }: { params: { creatorId: string } }) {
  const profileId = params.creatorId;
  // const { data: user } = useRetrieveUserQuery();
  //   const { data: user } = useGetUserByIdQuery({ id: profileId });
  //   console.log(user);

  return <div>profil uzytkownika o id: {profileId}</div>;
}
