import { apiSlice } from '../services/apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		postArticle: builder.mutation({
			query: ({ formData }) => ({
				url: `/articles/`,
				method: 'POST',
				body: formData,
			}),
		}),
	}),
});

export const { usePostArticleMutation } = authApiSlice;
