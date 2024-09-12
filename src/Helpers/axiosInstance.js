import axios from "axios";
import { FAKESTORE_API_URL } from "./constants";

const axiosInstance = axios.create({
    baseURL:FAKESTORE_API_URL
})

export default axiosInstance