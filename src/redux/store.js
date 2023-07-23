import { configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "@/api/rtkApi";
import { pizzasReducer } from "./pizzas/slice/pizzasSlice";
import { rollsReducer } from "./rolls/slice/rollsSlice";
import { othersReducer } from "./others/slice/pizzasSlice";
import { productReducer } from "./productItem/slice/productItemSlice";
import { basketReducer } from "./basket/slice/basketSlice";

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    rolls: rollsReducer,
    others: othersReducer,
    product: productReducer,
    basket: basketReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});
