import axios from "axios";

const BASE_URL = "http://192.168.1.8:8081/api";

export const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
});

api.interceptors.request.use(async (config)=>{
    const token =null;
    if(token) {
        config.headers.Authorization=`Bearer ${token}`;
    }

    return config;
})