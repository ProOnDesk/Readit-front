import { apiSlice } from '../services/apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		sendImages: builder.mutation({
			query: ({ formData }) => ({
				url: `/articles/files`,
				method: 'POST',
				
				body: formData,
			}),
		}),
	}),
});

export const { useSendImagesMutation } = authApiSlice;
