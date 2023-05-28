import {
    createSlice,
    PayloadAction,
    SerializedError,
  } from "@reduxjs/toolkit";
import { ProductType } from "../components/productDetail/product-list/Interface";

  interface ProductState {
    isLoading: boolean;
    error: SerializedError | null;
    products: ProductType[];
    currentProduct: ProductType;
}
  
  const initialState:ProductState = {
    isLoading: false,
    error: null,
    products: [],
    currentProduct: {} as ProductType,
  };
  
  const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      getProductFetch: (state) => {
        state.isLoading = true;
      },
      getProductSuccess: (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      },
      getProductFailure: (state) => {
        state.isLoading = false;
        state.error = new Error();
      } ,
      getCurrentProduct: (state, action: PayloadAction<{ product: ProductType}>) => {
        state.currentProduct = action.payload.product
      },

    },
    
  });
  export const {   getProductFetch, getProductSuccess, getProductFailure, getCurrentProduct  } = productSlice.actions;
  
   export default productSlice.reducer;
  