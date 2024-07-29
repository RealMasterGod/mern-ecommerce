import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isFetching: false,
  error: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.inFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.inFetching = true;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.inFetching = false;
      state.error = true;
    },
    //DELETE
    deleteProductStart: (state) => {
      state.inFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.inFetching = true;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.inFetching = false;
      state.error = true;
    },
    //UPDATE
    updateProductStart: (state) => {
      state.inFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.inFetching = true;
        state.products[state.products.findIndex(item => item._id === action.payload.id)] = action.payload.product
    },
    updateProductFailure: (state) => {
      state.inFetching = false;
      state.error = true;
    },
    // ADD NEW
    addProductStart: (state) => {
      state.inFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.inFetching = true;
      state.products = [...state.products,action.payload]
    },
    addProductFailure: (state) => {
      state.inFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
