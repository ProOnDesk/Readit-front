import { FieldValues } from "react-hook-form";
import { apiSlice } from "../services/apiSlice";
import { Article } from "./authApiSlice";

export interface Collection {
  id: number;
  owner_id: number;
  title: string;
  short_description: string;
  discount_percentage: number;
  collection_image_url: string;
  price: number;
  created_at: string;
  updated_at: string;
  articles_count: number;
  rating: number;
  articles_id: number[];
}

export interface CollectionsPagination {
  items: Collection[];
  total: number;
  pages: number;
  page: number;
  size: number;
}

export interface CollectionWithDetails extends Collection {
  articles: Article[];
}

const collectionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCollection: builder.mutation({
      query: ({ data, file }) => {
        const formData = new FormData();
        console.log(data);
        formData.append("collection", JSON.stringify(data));

        formData.append("collection_image", file);

        return {
          url: `/articles/collection`,
          method: "POST",
          body: formData,
        };
      },
    }),
    getMyCollections: builder.query<CollectionsPagination, { page: string }>({
      query: ({ page }) => ({
        url: `/articles/collections/me?page=${page}&size=12`,
        method: "GET",
      }),
    }),
    getCollectionById: builder.mutation<
      CollectionWithDetails,
      { collection_id: number }
    >({
      query: ({ collection_id }) => ({
        url: `/articles/collection/detail/${collection_id}`,
        method: "GET",
      }),
    }),
    editCollectionById: builder.mutation<
      Collection,
      { data: FieldValues; file: File; collection_id: number }
    >({
      query: ({ data, file, collection_id }) => {
        const formData = new FormData();
        console.log(data);
        formData.append("collection", JSON.stringify(data));

        formData.append("collection_image", file);

        return {
          url: `/articles/collection/${collection_id}`,
          method: "PATCH",
          body: formData,
        };
      },
    }),
    deleteCollectionById: builder.mutation<void, { collection_id: number }>({
      query: ({ collection_id }) => ({
        url: `/articles/collection/${collection_id}`,
        method: "DELETE",
      }),
    }),
    getCollectionsByUserId: builder.query<
      CollectionsPagination,
      { user_id: number; page: string }
    >({
      query: ({ user_id, page }) => ({
        url: `/articles/collections/user/${user_id}?page=${page}&size=12`,
        method: "GET",
      }),
    }),
    getCollectionsByArticleId: builder.query<
      CollectionsPagination,
      { article_id: number; page: string }
    >({
      query: ({ article_id, page }) => ({
        url: `/articles/collections/article/${article_id}?page=${page}&size=12`,
        method: "GET",
      }),
    }),
    buyCollection: builder.mutation<void, { collection_id: number }>({
      query: ({ collection_id }) => ({
        url: `/articles/collection/buy/${collection_id}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useCreateCollectionMutation,
  useGetMyCollectionsQuery,
  useGetCollectionByIdMutation,
  useEditCollectionByIdMutation,
  useDeleteCollectionByIdMutation,
  useGetCollectionsByUserIdQuery,
  useBuyCollectionMutation,
  useGetCollectionsByArticleIdQuery,
} = collectionsApiSlice;
