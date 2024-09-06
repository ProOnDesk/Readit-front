import { fetchUserByIdQuery } from "@/app/_actions/profileActions";
import DescriptionCreator from "@/app/_components/creatorsPage/DescriptionCreator";
import NameTagCreator from "@/app/_components/creatorsPage/NameTagCreator";
import ProfileArticlesCreator from "@/app/_components/creatorsPage/ProfileArticlesCreator";
import ProfileImageCreator from "@/app/_components/creatorsPage/ProfileImageCreator";
import SkillsCreator from "@/app/_components/creatorsPage/SkillsCreator";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: { creatorId: string };
}): Promise<Metadata> {
  const profileId = params.creatorId;
  const user = await fetchUserByIdQuery({ id: profileId });

  return {
    title: `${user?.first_name} ${user?.last_name} | ReadIt`,
    description: `${
      user?.short_description ||
      `Strona profilowa użytkownika ${user?.first_name} ${user?.last_name}`
    }`,
    openGraph: {
      images: [
        {
          url: String(user?.avatar),
          width: 800,
          height: 600,
          alt: String(user?.first_name),
        },
      ],
      type: "website",
    },
    robots: "index, follow",
  };
}

export default async function Page({
  params,
}: {
  params: { creatorId: string };
}) {
  const profileId = params.creatorId;
  const user = await fetchUserByIdQuery({ id: profileId });

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
