import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "products",
  initialState: {
    productInCards: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.productInCards = [...state.productInCards, action.payload];
    },
    removeProduct: (state, action) => {
      state.productInCards = state.productInCards.filter(
        (prod) => prod.id !== action.payload
      );
    },
    handleQuantity: (state, action) => {
      const { productId, type } = action.payload;
      const productIdx = state.productInCards.findIndex(
        (prod) => prod.id === productId
      );

      if (productIdx) {
        const product = state.productInCards[productIdx];

        if (type === "add") {
          product.quantity = ++product.quantity;
        } else {
          if (product.quantity > 0) {
            product.quantity = --product.quantity;
          } else {
            product.quantity = 0;
          }
        }
        state.productInCards = state.productInCards.splice(
          productIdx,
          1,
          product
        );
      }
    },
  },
});

export const { addProduct, removeProduct } = counterSlice.actions;

export default counterSlice.reducer;
