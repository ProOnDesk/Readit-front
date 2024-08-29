import { apiSlice } from "../services/apiSlice";
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
  articles: Article[];
}

export interface Article {
  title: string;
  summary: string;
  tags: { value: string }[];
  is_free: boolean;
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

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveUser: builder.query<User, void>({
      query: () => ({ url: "/user/get", method: "GET" }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/oauth2/token",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "password",
          email: email,
          password: password,
        }),
      }),
    }),
    register: builder.mutation({
      query: ({ email, firstname, lastname, password, sex }) => ({
        url: "/user/register/",
        method: "POST",
        body: { email, firstname, lastname, password, sex },
      }),
    }),
    logout: builder.mutation({
      query: () => ({ url: "/oauth2/logout", method: "GET" }),
    }),
    verifyToken: builder.mutation({
      query: () => ({
        url: "/oauth2/refresh-token",
        method: "POST",
      }),
    }),
    addSkillToUser: builder.mutation({
      query: ({ skill_name }) => ({
        url: "/user/skill",
        method: "POST",
        body: { skill_name },
      }),
    }),
    removeSkillItem: builder.mutation({
      query: ({ skill_id }) => ({
        url: `/user/skill/${skill_id}`,
        method: "DELETE",
      }),
    }),
    getUserFollowers: builder.query<
      { follows_amount: number },
      { userId: number }
    >({
      query: ({ userId }) => ({
        url: `/user/followers/${userId}`,
        method: "GET",
      }),
    }),
    followUser: builder.mutation({
      query: ({ userId }) => ({
        url: `/user/follow/${userId}`,
        method: "POST",
      }),
    }),
    unfollowUser: builder.mutation({
      query: ({ userId }) => ({
        url: `/user/follow/${userId}`,
        method: "DELETE",
      }),
    }),
    checkIfFollow: builder.query({
      query: ({ userId }) => ({
        url: `/user/follow/${userId}`,
        method: "GET",
      }),
    }),
    // verifyEmail: builder.mutation({
    //   query: ({ token }) => ({
    //     url: "/user/confirm_user/",
    //     method: "POST",
    //     body: { token },
    //   }),
    // }),
    // resetPassword: builder.mutation({
    //   query: ({ email }) => ({
    //     url: "/user/password_reset/",
    //     method: "POST",
    //     body: { email },
    //   }),
    // }),
    // confirmPassword: builder.mutation({
    //   query: ({ token, password }) => ({
    //     url: "/user/password_reset/confirm/",
    //     method: "POST",
    //     body: { token, password },
    //   }),
    // }),
    updateUser: builder.mutation({
      query: ({ fieldToUpdate, valueToUpdate }) => ({
        url: "/user/modify",
        method: "PATCH",
        body: { [fieldToUpdate]: valueToUpdate },
      }),
    }),
    updateUserAvatar: builder.mutation({
      query: ({ avatar }) => {
        const formData = new FormData();
        formData.append("file", avatar);
        return { url: "/user/modify/avatar", method: "PATCH", body: formData };
      },
    }),
    updateUserBgImage: builder.mutation({
      query: ({ img }) => {
        const formData = new FormData();
        formData.append("file", img);
        return {
          url: "/user/modify/background-image",
          method: "PATCH",
          body: formData,
        };
      },
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
  useUpdateUserAvatarMutation,
  useUpdateUserBgImageMutation,
  useGetUserFollowersQuery,
  useFollowUserMutation,
  useCheckIfFollowQuery,
  useUnfollowUserMutation,
} = authApiSlice;
