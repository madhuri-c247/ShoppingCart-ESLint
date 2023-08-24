import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  current,
} from "@reduxjs/toolkit";
//model
import { Actions, ProductData, States } from "../helper/model";
//helper
import fetchData from "../helper/apiHelper";
//constants
import { PRODUCT_BASE_URL } from "../helper/constants";

export const fetchProduct = createAsyncThunk<ProductData, void>(
  "fetchProducts",
  async () => {
    const product = await fetchData(PRODUCT_BASE_URL);
    return product;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    isLoading: false,
    isError: false,
    cart: 0,
    productQuantity: 0,
    productID: 0,
  } as States,

  reducers: {
    AddToCart: (state, action: PayloadAction<Actions>) => {
      state.cart = action.payload.cartValue + 1;
      //as I'm getting proxy data while utilizing state directly.
      //using current(state) could help you get exact data.
      if (state.product != null) {
        current(state.product).find((item: ProductData) => {
          return item.id === action.payload.id;
        });
      }
    },
    RemoveToCart: (state, action: PayloadAction<Actions>) => {
      if (action.payload.cartValue > 0) {
        state.cart = action.payload.cartValue - 1;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.product = action.payload.map((product: ProductData) => ({
        ...product,
      }));
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.isError = true;
    });
  },
});

export const { AddToCart, RemoveToCart } = productSlice.actions;
export default productSlice.reducer;
