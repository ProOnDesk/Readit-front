import { Metadata } from "next";
import CreatorsAd from "../_components/creatorsBrowse/CreatorsAd";
import CreatorsBest from "../_components/creatorsBrowse/CreatorsBest";
import SearchCreator from "../_components/creatorsBrowse/SearchCreator";
import FooterHomepage from "../_components/homepage/FooterHomepage";

export const metadata: Metadata = {
  title: "Przeglądaj twórców | ReadIt",
  description:
    "Setki najlepszych twórców w jednym miejscu - przeglądaj, czytaj i śledź ich popularność na platformie ReadIt. Dołącz do naszej społeczności już dziś!",
  robots: "index, follow",
};

export default function Page({
  searchParams,
}: {
  searchParams: { page: string; sort_by: string; value: string };
}) {
  return (
    <div className="">
      <CreatorsAd />
      <CreatorsBest />
      <SearchCreator searchParams={searchParams} />
      <div className="py-3"></div>
      <FooterHomepage colorVariant="dark" />
    </div>
  );
}
