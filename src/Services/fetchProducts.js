
import axiosInstance from "../Helpers/axiosInstance";

 export async function  fetchData() {
    try {
        const response = await axiosInstance.get(`/Products?categories`)
        return response.data
    } catch (error) {
        return error;
    }
}