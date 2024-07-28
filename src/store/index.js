import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/reducer/product";

export default configureStore({
  reducer: {
    product: productReducer,
  },
});
