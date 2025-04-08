import { apiSlice } from '../services/apiSlice';

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
			query: ({ article_ids, discounted_price }) => ({
				url: `/transactions/create-order`,
				method: 'POST',
				body: {
					items: article_ids,
					redirect_url: `${process.env.NEXT_PUBLIC_APP_LINK}/app/purchase-status/`,
					discounted_price,
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
		getTransactionStatus: builder.query<
			{ status: string },
			{ transaction_id: string }
		>({
			query: ({ transaction_id }) => ({
				url: `/transactions/order-status/${transaction_id}`,
				method: 'GET',
			}),
		}),
	}),
});

export const {
	usePayForArticlesMutation,
	useGetUserTransactionsQuery,
	useGetTransactionStatusQuery,
} = authApiSlice;
