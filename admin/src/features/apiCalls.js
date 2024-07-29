import { publicRequest, userRequest } from "../requestMethods"
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./product/productSlice"
import { loginFailure, loginStart, loginSuccess } from "./user/userSlice"

export const login = async (dispatch,user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await publicRequest.get('/product')
        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (dispatch, id) => {
    dispatch(deleteProductStart())
    try {
        await userRequest.delete('/product/'+ id)
        dispatch(deleteProductSuccess(id))
    } catch (err) {
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async (dispatch, product, id) => {
    dispatch(updateProductStart())
    try {
        await userRequest.put('/product/'+ id)
        dispatch(updateProductSuccess({id,product}))
    } catch (err) {
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (dispatch, product) => {
    dispatch(addProductStart())
    try {
        const res = await userRequest.post('/product',product)
        dispatch(addProductSuccess(res.data))
    } catch (err) {
        dispatch(addProductFailure())
    }
}