import { apiSlice } from "../services/apiSlice";
import { Article } from "./authApiSlice";

export interface PaginationTypeArticles {
  items: Article[];
  page: number;
  pages: number;
  size: number;
  total: number;
}

const articleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticlesSearch: builder.query<PaginationTypeArticles, { link: string }>({
      query: ({ link }) => ({
        url: `${link}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetArticlesSearchQuery } = articleApiSlice;
