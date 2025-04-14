import { apiSlice } from '../services/apiSlice';
export interface User {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
	short_description: string;
	follower_count: number;
	description: string;
	sex: string;
	skill_list: { id: number; skill_name: string }[];
	background_image: string;
	article_count: number;
	avg_rating_from_articles: number;
}

export interface Article {
	title: string;
	summary: string;
	tags: { value: string }[];
	is_free: boolean;
	is_bought: boolean;
	price: number;
	id: number;
	author: {
		id: number;
		first_name: string;
		last_name: string;
		avatar_url: string;
	};
	slug: string;
	created_at: Date;
	view_count: number;
	title_image_url: string;
	rating: number;
	rating_count: number;
}

export interface GetUserType {
	id: number;
	first_name: string;
	last_name: string;
	avatar_url: string;
	background_image_url: string;
	follower_count: number;
	article_count: number;
	avg_rating_from_articles: number;
	skill_list: { id: number; skill_name: string }[];
}

export interface GetUserTypePaginated {
	items: GetUserType[];
	page: number;
	pages: number;
	size: number;
	total: number;
}

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		retrieveUser: builder.query<User, void>({
			query: () => ({ url: '/user/get', method: 'GET' }),
		}),
		login: builder.mutation({
			query: ({ email, password }) => ({
				url: '/oauth2/token',
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams({
					grant_type: 'password',
					email: email,
					password: password,
				}),
			}),
		}),
		register: builder.mutation({
			query: ({ email, firstname, lastname, password, sex }) => ({
				url: '/user/register',
				method: 'POST',
				body: { email, firstname, lastname, password, sex },
			}),
		}),
		logout: builder.mutation({
			query: () => ({ url: '/oauth2/logout', method: 'GET' }),
		}),
		verifyToken: builder.mutation({
			query: () => ({
				url: '/oauth2/refresh-token',
				method: 'POST',
			}),
		}),
		addSkillToUser: builder.mutation({
			query: ({ skill_name }) => ({
				url: '/user/skill',
				method: 'POST',
				body: { skill_name },
			}),
		}),
		removeSkillItem: builder.mutation({
			query: ({ skill_id }) => ({
				url: `/user/skill/${skill_id}`,
				method: 'DELETE',
			}),
		}),
		getUserFollowers: builder.query<
			{ follows_amount: number },
			{ userId: number }
		>({
			query: ({ userId }) => ({
				url: `/user/followers/${userId}`,
				method: 'GET',
			}),
		}),
		followUser: builder.mutation({
			query: ({ userId }) => ({
				url: `/user/follow/${userId}`,
				method: 'POST',
			}),
		}),
		unfollowUser: builder.mutation({
			query: ({ userId }) => ({
				url: `/user/follow/${userId}`,
				method: 'DELETE',
			}),
		}),
		checkIfFollow: builder.query({
			query: ({ userId }) => ({
				url: `/user/follow/${userId}`,
				method: 'GET',
			}),
		}),
		verifyEmail: builder.mutation<null, { token: string }>({
			query: ({ token }) => {
				return {
					url: `/user/verify/${token}`,
					method: 'POST',
				};
			},
		}),
		resetPassword: builder.mutation({
			query: ({ email }) => ({
				url: '/user/password-reset/',
				method: 'POST',
				body: { email },
			}),
		}),
		confirmPassword: builder.mutation({
			query: ({ key, password }) => ({
				url: `/user/password-reset/${key}`,
				method: 'POST',
				body: { password },
			}),
		}),
		updateUser: builder.mutation({
			query: ({ fieldToUpdate, valueToUpdate }) => ({
				url: '/user/modify',
				method: 'PATCH',
				body: { [fieldToUpdate]: valueToUpdate },
			}),
		}),
		updatePassword: builder.mutation({
			query: ({ old_password, new_password }) => ({
				url: '/user/modify/password',
				method: 'PATCH',
				body: { old_password, new_password },
			}),
		}),
		updateUserAvatar: builder.mutation({
			query: ({ avatar }) => {
				const formData = new FormData();
				formData.append('file', avatar);
				return { url: '/user/modify/avatar', method: 'PATCH', body: formData };
			},
		}),
		updateUserBgImage: builder.mutation({
			query: ({ img }) => {
				const formData = new FormData();
				formData.append('file', img);
				return {
					url: '/user/modify/background-image',
					method: 'PATCH',
					body: formData,
				};
			},
		}),
		getUserFollwedByMe: builder.mutation<
			GetUserTypePaginated,
			{ page: string }
		>({
			query: ({ page }) => ({
				url: `/user/followers/followed_by/me?page=${page}&size=12`,
				method: 'GET',
			}),
		}),
		getUserFollowMe: builder.mutation<GetUserTypePaginated, { page: string }>({
			query: ({ page }) => ({
				url: `/user/followers/following/me?page=${page}&size=12`,
				method: 'GET',
			}),
		}),
	}),
});

export const {
	useRetrieveUserQuery,
	useLoginMutation,
	useRegisterMutation,
	useLogoutMutation,
	useVerifyTokenMutation,
	useAddSkillToUserMutation,
	useRemoveSkillItemMutation,
	useUpdateUserMutation,
	useUpdatePasswordMutation,
	useUpdateUserAvatarMutation,
	useUpdateUserBgImageMutation,
	useGetUserFollowersQuery,
	useFollowUserMutation,
	useCheckIfFollowQuery,
	useUnfollowUserMutation,
	useGetUserFollwedByMeMutation,
	useGetUserFollowMeMutation,
	useResetPasswordMutation,
	useVerifyEmailMutation,
	useConfirmPasswordMutation,
} = authApiSlice;
