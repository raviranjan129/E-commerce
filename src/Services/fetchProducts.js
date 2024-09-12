
import axiosInstance from "../Helpers/axiosInstance";

 export async function  fetchData() {
    try {
        const response = await axiosInstance.get(`/Products`)
        return response.data
    } catch (error) {
        return error;
    }
}