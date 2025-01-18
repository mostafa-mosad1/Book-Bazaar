import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CartSlice = createApi({
  reducerPath: "cart",
  tagTypes: ["books"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://readmall.onrender.com/api/v1",
  }),
  endpoints: (builder) => ({
    getCartBooks: builder.query({
      query: () => {
        return {
          url: "/carts/allCartBooks",
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

    addToCart: builder.mutation({
      query: (BookId: number) => {
        return {
          url: `/carts/addToCart`,
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
    deleteToCart: builder.mutation({
      query: (BookId: string|number) => {
        return {
          url: `/carts/deleteFromCart/${BookId}`,
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
  useAddToCartMutation,
  useGetCartBooksQuery,
  useDeleteToCartMutation,
} = CartSlice;
