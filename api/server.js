import axios from "axios";


const BASE_URL = "https://www.frontendv1.sojodata.com/api/v1/"

export const Axios = axios.create({
    baseURL: BASE_URL,
});