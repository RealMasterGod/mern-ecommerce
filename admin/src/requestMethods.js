import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/'


const getToken = () => {
    if(JSON.parse(localStorage.getItem("persist:root"))?.user) {
        return JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.accessToken
    } else {
        return ""
    }
}

const TOKEN = getToken()
export const publicRequest = axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})