import { useGetUserByIdQuery } from "@/app/_actions/profileActions";
import DescriptionCreator from "@/app/_components/creatorsPage/DescriptionCreator";
import NameTagCreator from "@/app/_components/creatorsPage/NameTagCreator";
import ProfileArticlesCreator from "@/app/_components/creatorsPage/ProfileArticlesCreator";
import ProfileImageCreator from "@/app/_components/creatorsPage/ProfileImageCreator";
import SkillsCreator from "@/app/_components/creatorsPage/SkillsCreator";
import { notFound } from "next/navigation";

export const revalidate = 0;

export default async function Page({
  params,
}: {
  params: { creatorId: string };
}) {
  const profileId = params.creatorId;
  const user = await useGetUserByIdQuery({ id: profileId });

  if (!user) return notFound();

  return (
    <div className="md900:bg-whiteSecond lg1200:pb-20">
      <div className="max-w-[1600px] mx-auto w-full h-full min-h-screen ">
        <ProfileImageCreator user={user} />
        <NameTagCreator user={user} />
        <SkillsCreator user={user} />
        <DescriptionCreator user={user} />
        <ProfileArticlesCreator user={user} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Zakładam, że masz funkcję lub sposób na pobranie listy creatorId.
  // Na przykład, jeśli masz ograniczoną liczbę creatorId, możesz je podać ręcznie:

  const creatorIds = ["1", "2", "3"]; // Dodaj wszystkie możliwe ID tutaj

  // Tworzenie tablicy parametrów na podstawie id
  const params = creatorIds.map((id) => ({
    creatorId: id,
  }));

  return params;
}
