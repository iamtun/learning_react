import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "products",
  initialState: {
    productInCards: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.productInCards = [
        ...state.productInCards,
        { ...action.payload, quantity: 1 },
      ];
    },
    removeProduct: (state, action) => {
      state.productInCards = state.productInCards.filter(
        (prod) => prod.id !== action.payload
      );
    },
    handleQuantity: (state, action) => {
      const { productId, type } = action.payload;

      state.productInCards = state.productInCards.map((prod) => {
        if (prod.id === productId) {
          if (type === "add") {
            prod.quantity = ++prod.quantity;
          } else {
            if (prod.quantity > 0) {
              prod.quantity = --prod.quantity;
            } else {
              prod.quantity = 0;
            }
          }
        }

        return prod;
      });
    },
  },
});

export const { addProduct, removeProduct, handleQuantity } =
  counterSlice.actions;

export default counterSlice.reducer;
