import {
  fetchUserArticles,
  fetchUserByIdQuery,
  fetchUsersNumber,
} from "@/app/_actions/profileActions";
import DescriptionCreator from "@/app/_components/creatorsPage/DescriptionCreator";
import NameTagCreator from "@/app/_components/creatorsPage/NameTagCreator";
import ProfileArticlesCreator from "@/app/_components/creatorsPage/ProfileArticlesCreator";
import ProfileImageCreator from "@/app/_components/creatorsPage/ProfileImageCreator";
import SkillsCreator from "@/app/_components/creatorsPage/SkillsCreator";
import FooterHomepage from "@/app/_components/homepage/FooterHomepage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: { creatorId: string; page: string };
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
  searchParams,
}: {
  params: { creatorId: string };
  searchParams: { page: string };
}) {
  const profileId = params.creatorId;
  const user = await fetchUserByIdQuery({ id: profileId });

  if (!user) return notFound();

  return (
    <div className="md900:bg-whiteSecond ">
      <div className="max-w-[1600px] mx-auto w-full h-full min-h-screen ">
        <ProfileImageCreator user={user} />
        <NameTagCreator user={user} />
        <SkillsCreator user={user} />
        <DescriptionCreator user={user} />
        <ProfileArticlesCreator user={user} page={searchParams.page} />
      </div>
      <div className="py-5"></div>
      <FooterHomepage colorVariant="dark"/>
    </div>
  );
}

export async function generateStaticParams() {
  const data = await fetchUsersNumber();
  const total = data?.total || 0;

  const creatorIds = Array.from({ length: total }, (_, i) =>
    (i + 1).toString()
  );

  let allParams: { creatorId: string; page: string }[] = [];

  for (const id of creatorIds) {
    const userPages = await fetchUserArticles({ userId: +id, page: "1" });
    const pages = userPages?.pages || 1;

    const params = Array.from({ length: pages }, (_, i) => ({
      creatorId: id,
      page: (i + 1).toString(),
    }));

    allParams = [...allParams, ...params];
  }

  return allParams;
}
