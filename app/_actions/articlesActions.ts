"use server";

import { cookies } from "next/headers";
import { SearchParams } from "../browse/page";
import { notFound } from "next/navigation";

export async function getArticleInfoBySlug({ slug }: { slug: string }) {
  const s = "chwytliwy-tytuł,-który-zszokuje?-śmiało!...";

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/articles/slug/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug: decodeURIComponent(slug) }),
        cache: "no-cache",
      }
    );
    if (!response.ok) {
      throw new Error(`Błąd serwera: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    notFound();
  }
}

export async function getArticleComments({
  article_id,
  page,
  size,
  sort_order,
}: {
  article_id: number;
  page: number;
  size: number;
  sort_order?: string;
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/articles/comment/all/${article_id}?page=${page}&size=${size}&sort_order=${sort_order}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
		cache: "no-cache",
      }
    );
    if (!response.ok) {
      throw new Error(`Błąd serwera: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Nie udało się pobrać komentarzy", error);
  }
}

export async function getArticlesSearch(params: SearchParams) {
  let link = `${process.env.NEXT_PUBLIC_HOST}/articles/search?sort_by=${
    params.sort_by || "views"
  }&sort_order=${params.sort_order || "desc"}`;

  if (params.min_price) {
    link += `&min_price=${params.min_price}`;
  }
  if (params.max_price) {
    link += `&max_price=${params.max_price}`;
  }
  if (params.is_free === "true") {
    console.log("is free");
    link += `&is_free=true`;
  }
  if (params.min_rating) {
    link += `&min_rating=${params.min_rating}`;
  }
  if (params.tags) {
    params.tags as any;
    const tagsArr = decodeURIComponent(params.tags).split(",");

    tagsArr.forEach((tag: string) => {
      link += `&tags=${tag}`;
    });
  }
  if (params.value) {
    link += `&value=${decodeURIComponent(params.value)}`;
  }

  link += `&page=${params.page || 1}`;

  try {
    const response = await fetch(`${link}&size=24`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error(`Błąd serwera: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Nie udało się pobrać artykułów", error);
  }
}
