import { apiSlice } from '../services/apiSlice';

const supportApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createNewIssue: builder.mutation({
			query: ({ category, title, description }) => ({
				url: '/support/issue',
				method: 'POST',
				body: { category, title, description },
			}),
		}),
	}),
});

export const { useCreateNewIssueMutation } = supportApiSlice;
