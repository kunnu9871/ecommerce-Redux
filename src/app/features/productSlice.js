import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';


const initialState = {
    items: [],
    cartItems: [],
    loading: false,
    error: ''
};



export const fetchProducts = createAsyncThunk('product', async () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
    // .then(data => console.log(data))

});

const productsSlices = createSlice({
    name: 'Shopping Products',
    initialState,
    reducers: {
        addToCart: (state, actions) => {
            // ************ Problem ************************
            // const quantity=1;
            // const existingItems = state.cartItems.find(item => item.id === actions.payload.id)
            // if (existingItems){
            //    return state.cartItems.map((item)=>{
            //       if(item.id === existingItems.id){
            //         return {...item, quantity: item.quantity + 1}
            //       }  
            //       return item 
            //     })
            // }  
            // state.cartItems.push({...actions.payload, quantity})

            const existingItem = state.cartItems.find(item => item.id === actions.payload.id);

            if (existingItem) {
                state.cartItems = state.cartItems.map(item =>
                    item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                state.cartItems.push({ ...actions.payload, quantity: 1 });
            }
        },
        removefromCart: (state, actions) => {
            state.cartItems = state.cartItems.filter(items => items.id != actions.payload)
        },

        clearCart: (state) => {
            state.cartItems = [];
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })

        builder.addCase(fetchProducts.fulfilled, (state, actions) => {
            state.loading = false;
            state.items = actions.payload;
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, actions) => {
            state.loading = false;
            state.items = [];
            state.error = actions.error.message;
        })
    }
});

export default productsSlices.reducer;
export const { addToCart, removefromCart, clearCart } = productsSlices.actions; 