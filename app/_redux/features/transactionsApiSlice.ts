import { redirect } from 'next/dist/server/api-utils';
import { apiSlice } from '../services/apiSlice';
import { Article } from './authApiSlice';

export interface Transaction {
	id: string;
	status: string;
	created_at: string;
	total_price: string;
	items: { id: number; title: string; price: number }[];
}
interface PaginationTypeTransaction {
	items: Transaction[];
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
		getUserTransactions: builder.query<
			PaginationTypeTransaction,
			{ page: number; page_size?: number }
		>({
			query: ({ page = 1, page_size }) => ({
				url: `/transactions/user-transactions?page=${page}&size=${page_size}`,
				method: 'GET',
			}),
		}),
	}),
});

export const { usePayForArticlesMutation, useGetUserTransactionsQuery } =
	authApiSlice;
