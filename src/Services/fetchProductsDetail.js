

import axiosInstance from "../Helpers/axiosInstance";


export async function fetchProductsDetail(id) {
    try {
        const response= await axiosInstance.get(`/products/${id}`)
        return response.data
    } catch (error) {
        return error;
    
}}