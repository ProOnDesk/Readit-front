import { apiSlice } from "../services/apiSlice";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  short_description: string;
  follower_count: number;
}

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveUser: builder.query<User, void>({
      query: () => ({ url: "/user/get", method: "GET" }),
    }),
    // updateUser: builder.mutation({
    //   query: ({ fieldToUpdate, valueToUpdate }) => ({
    //     url: "/user/profile/",
    //     method: "PATCH",
    //     body: { [fieldToUpdate]: valueToUpdate },
    //   }),
    // }),
    // updateAvatar: builder.mutation({
    //   query: (file) => {
    //     const formData = new FormData();
    //     formData.append("profile_image", file);
    //     return {
    //       url: "/user/profile_image/",
    //       method: "PATCH",
    //       body: formData,
    //     };
    //   },
    // }),
    // socialAuthenticate: builder.mutation({
    //   query: ({ provider, state, code }) => ({
    //     url: `/o/${provider}/?state=${encodeURIComponent(
    //       state
    //     )}&code=${encodeURIComponent(code)}`,
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   }),
    // }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/oauth2/token/",
        method: "POST",
        body: { email, password },
      }),
    }),
    register: builder.mutation({
      query: ({ email, firstname, lastname, password, sex }) => ({
        url: "/user/register/",
        method: "POST",
        body: { email, firstname, lastname, password, sex },
      }),
    }),
    // verifyToken: builder.mutation({
    //   query: () => ({
    //     url: "/token/verify/",
    //     method: "POST",
    //   }),
    // }),
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
    logout: builder.mutation({
      query: () => ({ url: "/token/logout/", method: "POST" }),
    }),
    // deleteAccount: builder.mutation({
    //   query: () => ({ url: "/user/delete/", method: "DELETE" }),
    // }),
    // getNotifications: builder.query<NotificationsRepsonse, any>({
    //   query: ({ p, page_size }) => ({
    //     url: `/notification/list/?p=${p}&page_size=${page_size}`,
    //     method: "GET",
    //   }),
    // }),
    // reportIssue: builder.mutation({
    //   query: ({ category, title, description }) => ({
    //     url: "/reporting/issue/create/",
    //     method: "POST",
    //     body: { category, title, description },
    //   }),
    // }),
    // getReports: builder.query<Report[], void>({
    //   query: () => ({ url: "/reporting/issue/list/", method: "GET" }),
    // }),
  }),
});

export const {
  useRetrieveUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} = authApiSlice;
