import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authapi } from "./features/Api/Authapi";
import { gategoriesSlice } from "./features/Api/gategoriesSlice";
import { HomeSlice } from "./features/Api/HomeSlice";
import { CartSlice } from "./features/Api/CartSlice";
import { favoritesSlice } from "./features/Api/favoritesSlice";
export const store = configureStore({
  reducer: {
    [authapi.reducerPath]: authapi.reducer,
    [gategoriesSlice.reducerPath]: gategoriesSlice.reducer,
    [HomeSlice.reducerPath]: HomeSlice.reducer,
    [CartSlice.reducerPath]: CartSlice.reducer,
    [favoritesSlice.reducerPath]: favoritesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat([authapi.middleware])
      .concat([gategoriesSlice.middleware])
      .concat([HomeSlice.middleware])
      .concat([CartSlice.middleware])
      .concat([favoritesSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
