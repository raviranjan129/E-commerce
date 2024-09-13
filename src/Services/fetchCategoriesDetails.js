
import axiosInstance from "../Helpers/axiosInstance";

export async function fetchCategories() {
    try {
        const response= await axiosInstance.get(`products/categories`)
        return response.data
    } catch (error) {
        return error
    }
}