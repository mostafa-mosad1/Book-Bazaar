import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const HomeSlice = createApi({
  reducerPath: "home",
  tagTypes: ["home"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://readmall.onrender.com/api/v1",
  }),
  endpoints: (builder) => ({
    getHomeData: builder.query({
      query: () => {
        return {
          url: "/books/getByViews?page=1",
        };
      },
    }),
    getSingleBook: builder.query({
      query: (BookId: string) => {
        return {
          url: `/books/getById/${BookId}`,
        };
      },
    }),
  }),
});

export const {
  useGetHomeDataQuery,
  useGetSingleBookQuery,
} = HomeSlice;
