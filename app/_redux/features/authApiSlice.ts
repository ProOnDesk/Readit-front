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
  }),
});

export const {
  useRetrieveUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useVerifyTokenMutation,
} = authApiSlice;
