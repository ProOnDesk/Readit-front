import { apiSlice } from "../services/apiSlice";
import { User } from "./authApiSlice";

export interface PaginatonType {
  items: User[];
  page: number;
  pages: number;
  size: number;
  total: number;
}

const creatorsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsersTopFollows: builder.mutation<
      PaginatonType,
      { page: number; size: number }
    >({
      query: ({ page, size }) => ({
        url: `/user/followers/top?page=${page}&size=${size}`,
        method: "GET",
      }),
    }),
    getUsersTopArticles: builder.mutation<
      PaginatonType,
      { page: number; size: number }
    >({
      query: ({ page, size }) => ({
        url: `/user/articles/top?page=${page}&size=${size}`,
        method: "GET",
      }),
    }),
    searchForUser: builder.mutation<PaginatonType, { value: string }>({
      query: ({ value }) => ({
        url: `/user/search?value=${value}&sort_order=desc&sort_by=match_count&page=1&size=12`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUsersTopFollowsMutation,
  useGetUsersTopArticlesMutation,
  useSearchForUserMutation,
} = creatorsApiSlice;