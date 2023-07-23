import { calcTotalPrice } from "@/utils/calcTotalPrice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  error: undefined,
  isLoading: false,
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.items.find((res) => {
        return JSON.stringify(res) === JSON.stringify(action.payload);
      });

      if (item) {
        item.count++;
      } else {
        state.items.push(action.payload);
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    minuseItem(state, action) {
      const item = state.items.find((res) => {
        return JSON.stringify(res) === JSON.stringify(action.payload);
      });

      if (item.count > 1) {
        item.count--;
      } else {
        state.items = state.items.filter((res) => {
          return JSON.stringify(res) !== JSON.stringify(action.payload);
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
  },
});

export const { actions: basketActions } = basketSlice;
export const { reducer: basketReducer } = basketSlice;
