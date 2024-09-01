import { apiSlice } from "../services/apiSlice";
import { Article } from "./authApiSlice";

interface PaginatonType {
	items: Article[];
	page: number;
	pages: number;
	size: number;
	total: number;
}

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		postArticle: builder.mutation({
			query: ({ formData }) => ({
				url: `/articles/`,
				method: "POST",
				body: formData,
			}),
		}),
		buyArticle: builder.mutation({
			query: ({ article_id }) => ({
				url: `/articles/buy/${article_id}`,
				method: "POST",
			}),
		}),
		addArticleToFavourites: builder.mutation({
			query: ({ article_id }) => ({
				url: `/articles/wish-list/add/${article_id}`,
				method: "POST",
			}),
		}),
		getArticleDetailsById: builder.query({
			query: ({ article_id }) => ({
				url: `/articles/detail/id/${article_id}`,
				method: "GET",
			}),
		}),
		makeOpinion: builder.mutation({
			query: ({ article_id, rating, content }) => ({
				url: `/articles/comment/${article_id}`,
				method: "POST",
				body: {
					rating,
					content,
				},
			}),
		}),
		getArticlesHomepage: builder.query<PaginatonType, void>({
			query: () => ({
				url: `/articles/search?sort_order=desc&sort_by=views&page=1&size=10`,
				method: "GET",
			}),
		}),
	}),
});

export const {
	usePostArticleMutation,
	useBuyArticleMutation,
	useAddArticleToFavouritesMutation,
	useGetArticleDetailsByIdQuery,
	useMakeOpinionMutation,
	useGetArticlesHomepageQuery,
} = authApiSlice;
