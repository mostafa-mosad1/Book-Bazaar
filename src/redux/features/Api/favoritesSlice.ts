import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const favoritesSlice = createApi({
  reducerPath: "favorites",
  tagTypes: ["books"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://readmall.onrender.com/api/v1",
  }),
  endpoints: (builder) => ({
    getFavoritesBooks: builder.query({
      query: () => {
        return {
          url: "/favorites/allFavorites",
          headers: {
            Authorization: `Bearer ${localStorage?.getItem("token")}`,
          },
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.payload.books.map(({ id }: { id: string }) => ({
                type: "books" as const,
                id,
              })),
              { type: "books", id: "LIST" },
            ]
          : [{ type: "books", id: "LIST" }],
    }),

    addToFavorites: builder.mutation({
      query: (BookId: number) => {
        return {
          url: `/favorites/addFavorite`,
          method: "POST",
          body: {
            bookId: BookId,
          },
          headers: {
            Authorization: `Bearer ${localStorage?.getItem("token")}`,
          },
        };
      },
      invalidatesTags: [{ type: "books", id: "LIST" }],
    }),
    deleteToFavorites: builder.mutation({
      query: (BookId: string) => {
        return {
          url: `/favorites/deleteFavorite/${BookId}`,
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${localStorage?.getItem("token")}`,
          },
        };
      },
      invalidatesTags: [{ type: "books", id: "LIST" }],
    }),
  }),
});

export const {
 useAddToFavoritesMutation,
 useDeleteToFavoritesMutation,
 useGetFavoritesBooksQuery
} = favoritesSlice;
