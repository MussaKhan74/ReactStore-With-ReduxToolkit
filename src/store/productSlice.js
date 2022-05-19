import { createSlice } from "@reduxjs/toolkit";

export const STASUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading"
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STASUSES.IDLE
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStasus(state, action) {
      state.status = action.payload;
    }
  }
});

export const { setProducts, setStasus } = productSlice.actions;
export default productSlice.reducer;

// Thunks
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStasus(STASUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStasus(STASUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStasus(STASUSES.ERROR));
    }
  };
}
