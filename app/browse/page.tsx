import React from "react";
import BrowseHeader from "../_components/browseArticles/BrowseHeader";
import Content from "../_components/browseArticles/Content";
import FooterHomepage from "../_components/homepage/FooterHomepage";


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
  return (
    <div>
      <BrowseHeader />
      <Content params={searchParams} />
      <div className="py-5"></div>
			<FooterHomepage  colorVariant="dark" />
    </div>
  );
}
