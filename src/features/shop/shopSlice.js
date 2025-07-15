import { createSlice } from "@reduxjs/toolkit";
import categories from "../../data/categories";
import products from "../../data/products";

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        categories, 
        products, 
        categorySelected:'',
        productsFilteredByCategory: [],
        productSelected: {},
    
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload;
        },

        filterProducts: (state,action) => {
            state.productsFilteredByCategory = state.products.filter(product => product.category.toLowerCase() === action.payload.toLowerCase());
        },

        setProuctSelected: (state, action) => {
            state.productSelected = action.payload;
        }
    },
});

export const { setCategorySelected, filterProducts, setProductSelected } = shopSlice.actions;

export default shopSlice.reducer;
