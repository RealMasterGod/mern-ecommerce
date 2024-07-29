import axios from 'axios';

const getToken = () => {
    if(localStorage.getItem("persist:root")?.user) {
        return JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.isAdmin
    } else {
        return ""
    }
}

const TOKEN = getToken()
export const publicRequest = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL
})

export const userRequest = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})