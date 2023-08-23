import axios from "axios";
import { PayloadAction, createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { ProductData } from "../components/model";

export const fetchProduct = createAsyncThunk('fetchProducts', 

async () => {
    const product = await axios.get('https://fakestoreapi.com/products')
        const productData = product.data as ProductData
        console.log(productData,'productdata')
        return productData; 
})

interface States{
    product: ProductData[];
    isLoading: boolean;
    isError: boolean;
    cart: number;
    productQuantity: number;
    productID: number;
}

interface Actions{
    id: number,
    cartValue:number
}

const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        isLoading: false,
        isError: false,
        cart: 0,
        productQuantity: 0,
        productID: 0
    } as States,

    reducers: {
        AddToCart: (state, action:PayloadAction<Actions>) => {
            state.cart = action.payload.cartValue + 1;
            //as I'm getting proxy data while utilizing state directly.
            //using current(state) could help you get exact data.
            if(state.product!=null){
                const requiredData = current(state.product).find((item:ProductData) => {
                    return item.id === action.payload.id
                })
                console.log(requiredData, 'data');
            }
        },
        RemoveToCart: (state, action:PayloadAction<Actions>) => {
            if (action.payload.cartValue > 0) {
                state.cart = action.payload.cartValue - 1;
            }
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action:PayloadAction<any>) => {
            state.isLoading = false;
            state.isError = false;
            if(state.product.length===0) state.product.push(...action.payload);                    
        });
        builder.addCase(fetchProduct.rejected, (state) => {
            state.isError = true;
        })
    }
})

export const { AddToCart, RemoveToCart } = productSlice.actions;
export default productSlice.reducer;