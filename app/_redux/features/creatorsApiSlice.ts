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
    getUsersTopFollows: builder.mutation<PaginatonType, { page: number }>({
      query: ({ page }) => ({
        url: `/user/followers/top?page=${page}&size=2`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersTopFollowsMutation } = creatorsApiSlice;
