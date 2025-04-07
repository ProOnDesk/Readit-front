import { redirect } from 'next/dist/server/api-utils';
import { apiSlice } from '../services/apiSlice';
import { Article } from './authApiSlice';

interface PaginatonType {
	items: Article[];
	page: number;
	pages: number;
	size: number;
	total: number;
}

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		payForArticles: builder.mutation({
			query: ({ article_ids }) => ({
				url: `/transactions/create-order`,
				method: 'POST',
				body: {
					items: article_ids,
					redirect_url: `${process.env.NEXT_PUBLIC_APP_LINK}/app/lib`,
				},
			}),
		}),
	}),
});

export const { usePayForArticlesMutation } = authApiSlice;
