import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk('fetchProducts', async () => {
    const product = await axios.get('https://fakestoreapi.com/products').then((res) => {
        return res.data;
    })
    return product;
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        isLoading: false,
        isError: false,
        cart: 0,
        productQuantity: 0,
        productID: null
    },
    reducers: {
        AddToCart: (state, action) => {
            state.cart = action.payload.cartValue + 1;
            //as I'm getting proxy data while utilizing state directly.
            //using current(state) could help you get exact data.
            const requiredData = current(state.product).find(item => {
                return item.id === action.payload.id
            })
            console.log(requiredData, 'data');
        },
        RemoveToCart: (state, action) => {
            if (action.payload.cartValue > 0) {
                state.cart = parseInt(action.payload.cartValue) - 1;
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
            state.product = action.payload;
        });
        builder.addCase(fetchProduct.rejected, (state) => {
            state.isError = true;
        })
    }
})

export const { AddToCart, RemoveToCart } = productSlice.actions;
export default productSlice.reducer;