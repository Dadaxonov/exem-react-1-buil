import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    count: 1,
  },
  reducers: {
    add: (state, action) => {
      const findEl = state.products.find(
        (item) => item.id == action.payload.id
      );
      if (!findEl) {
        return {
          ...state,
          count: state.count + 1,
          products: [
            ...state.products,
            {
              ...action.payload,
              count: 1,

              userPrice: action.payload.price,
            },
          ],
        };
      }
    },
    incrimend: (state, action) => {
      const newArr = state.products.map((item) => {
        if (action.payload == item.id) {
          return {
            ...item,
            count: item.count + 1,
            userPrice: item.price * (item.count + 1),
          };
        }
        return item;
      });
      return { ...state, products: newArr };
    },
    dicriment: (state, action) => {
      const newArr = state.products
        .map((item) => {
          if (action.payload == item.id) {
            return {
              ...item,
              count: item.count - 1,
              userPrice: item.price * (item.count - 1),
            };
          }
          return item;
        })
        .filter((item) => item.count > 0);
      return { ...state, products: newArr, count: newArr.length };
    },
    del: (state, action) => {
      const newArr = state.products.filter((item) => item.id != action.payload);
      return { ...state, products: newArr, count: newArr.length };
    },
    
  },
});

export default productSlice.reducer;
export const { add, del, dicriment, incrimend } = productSlice.actions;
