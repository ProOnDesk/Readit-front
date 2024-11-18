import { apiSlice } from "../services/apiSlice";
import { Article } from "./authApiSlice";

export interface PaginationTypeArticles {
	items: Article[];
	page: number;
	pages: number;
	size: number;
	total: number;
}

export interface PaginationTypeArticlesUpo {
	items: { article: Article }[];
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
		searchForArticle: builder.mutation<
			PaginationTypeArticles,
			{ value: string }
		>({
			query: ({ value }) => ({
				url: `/articles/search?value=${value}&sort_order=desc&sort_by=views&page=1&size=12`,
				method: "GET",
			}),
		}),
		getUserArticles: builder.query<
			PaginationTypeArticles,
			{ userId: number; page?: number }
		>({
			query: ({ userId, page = 1 }) => ({
				url: `/user/get/articles/${userId}?page=${page}&size=12`,
				method: "GET",
			}),
		}),
		getBoughtArticles: builder.mutation<
			PaginationTypeArticlesUpo,
			{ page: string }
		>({
			query: ({ page }) => ({
				url: `/articles/bought-list?page=${page}&size=20`,
				method: "GET",
			}),
		}),
		getFavArticles: builder.mutation<
			PaginationTypeArticlesUpo,
			{ page: string }
		>({
			query: ({ page }) => ({
				url: `/articles/wish-list/all/me?page=${page}&size=20`,
				method: "GET",
			}),
		}),
		articleForHomepage: builder.mutation<PaginationTypeArticles, void>({
			query: () => ({
				url: `/articles/search?sort_order=desc&sort_by=views&page=1&size=20`,
				method: "GET",
			}),
		}),
    getMyArticles: builder.query<
      PaginationTypeArticles,
      { value?: string; page: string }
    >({
      query: ({ page, value = "" }) => ({
        url: `/articles/me?value=${value}&page=${page}&size=12`,
        method: "GET",
      }),
    }),
	}),
});

export const {
	useGetArticlesSearchQuery,
	useSearchForArticleMutation,
	useGetUserArticlesQuery,
	useGetBoughtArticlesMutation,
	useGetFavArticlesMutation,
	useArticleForHomepageMutation,
  useGetMyArticlesQuery,
} = articleApiSlice;
