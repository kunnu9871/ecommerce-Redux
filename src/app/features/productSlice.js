import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';


const initialState = {
    items: [],
    cartItems : [],
    loading : false,
    error: ''
};



export const fetchProducts = createAsyncThunk( 'product',async ()=>{
    return fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    // .then(data => console.log(data))

});

const productsSlices = createSlice({
    name : 'Shopping Products',
    initialState,
    reducers: {
        addToCart: (state, actions)=>{
            state.cartItems.push(actions.payload)
            // console.log(actions.payload)
            console.log(state)
        },
        removefromCart: (state, actions)=>{
            state.cartItems= state.cartItems.filter(items=> items.id != actions.payload)
        },

        clearCart : (state)=>{
            state.cartItems= [];
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true 
        })

        builder.addCase(fetchProducts.fulfilled, (state, actions)=>{
            state.loading= false;
            state.items = actions.payload;
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, actions) =>{
            state.loading = false;
            state.items= [];
            state.error= actions.error.message;
        })
    }
});

export default productsSlices.reducer;
export const {addToCart, removefromCart, clearCart} = productsSlices.actions; 