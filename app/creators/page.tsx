import { Metadata } from "next";
import CreatorsAd from "../_components/creatorsBrowse/CreatorsAd";
import CreatorsBest from "../_components/creatorsBrowse/CreatorsBest";
import CreatorsSecion from "../_components/creatorsBrowse/CreatorsSecion";
import SearchCreator from "../_components/creatorsBrowse/SearchCreator";
import TopArticlesSection from "../_components/creatorsBrowse/TopArticlesSection";

export const metadata: Metadata = {
  title: "Przeglądaj twórców | ReadIt",
  description: "Setki najlepszych twórców w jednym miejscu",
};

export default function Page() {
  return (
    <div className="">
      <CreatorsAd />
      <CreatorsBest />
      <SearchCreator />
      <CreatorsSecion />
      <TopArticlesSection />
    </div>
  );
}
