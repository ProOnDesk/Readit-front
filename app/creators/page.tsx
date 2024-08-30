import { Metadata } from "next";
import React from "react";
import CreatorsAd from "../_components/creatorsBrowse/CreatorsAd";
import CreatorsBest from "../_components/creatorsBrowse/CreatorsBest";
import CreatorsSecion from "../_components/creatorsBrowse/CreatorsSecion";

export const metadata: Metadata = {
  title: "Przeglądaj twórców | ReadIt",
  description: "Setki najlepszych twórców w jednym miejscu",
};

export default function Page() {
  return (
    <div className="">
      <CreatorsAd />
      <CreatorsBest />
      <CreatorsSecion />
      <div>fdsfds</div>
    </div>
  );
}
