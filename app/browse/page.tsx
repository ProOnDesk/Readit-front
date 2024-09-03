import React from "react";
import BrowseHeader from "../_components/browseArticles/BrowseHeader";
import Content from "../_components/browseArticles/Content";


export interface SearchParams {
  sort_by: string;
  sort_order: string;
  min_price: string;
  max_price: string;
  is_free: string;
  min_rating: string;
  tags: string;
  value: string;
  page: string;
}

interface PageProps {
  searchParams: SearchParams;
}

export default function Page({ searchParams }: PageProps) {
  console.log(searchParams);

  return (
    <div>
      <BrowseHeader />
      <Content params={searchParams} />
    </div>
  );
}
