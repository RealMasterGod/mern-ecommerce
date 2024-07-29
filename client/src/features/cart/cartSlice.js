import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: [],
    quantity: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state,action) => {
            state.quantity += 1
            state.products = [...state.products, action.payload]
            state.total += action.payload.price*action.payload.quantity
        },
        updateProductQuantity: (state, action) => {
            let index = state.products.findIndex(i => i._id === action.payload.id)
            if(action.payload.inc) {
                state.products[index].quantity += 1;
                state.total += state.products[index].price
            } else {
                state.products[index].quantity -= 1;
                state.total -= state.products[index].price
            }
        },
        deleteProduct: (state,action) => {
            let price;
            state.products = state.products.filter(i => {
                if(i._id !== action.payload.id) {
                    return i
                } else {
                    price = i.price
                }
            })
            state.total -= price
        }
    }
})

export const {addProduct,updateProductQuantity,deleteProduct} = cartSlice.actions

export default cartSlice.reducer