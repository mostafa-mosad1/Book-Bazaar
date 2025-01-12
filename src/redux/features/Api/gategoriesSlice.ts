import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const gategoriesSlice = createApi({
  reducerPath: "gategoriesSlice",
  tagTypes: ["gategoriesSlice"],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://readmall.onrender.com/api/v1",
  }),
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: () => {
        return { url: "/categories/getAllCategories" };
      },
    }),
    getAllBooksByCategory: build.query({
      query: (id:string) => {
        return { url: `/books/getByCategoryId/${id}?page=1` };
      },
    }),
    getAuthorBooksById: build.query({
      query: (id:string) => {
        return { url: `/authors/getAuthorById/${id}` };
      },
    }),
    getAllAuthors: build.query({
      query: () => {
        return { url: "/authors?page=0&limit=15" };
      },
    }),
  }),
});

export const { useGetAllCategoriesQuery,useGetAllAuthorsQuery,useGetAllBooksByCategoryQuery,useGetAuthorBooksByIdQuery } = gategoriesSlice;
