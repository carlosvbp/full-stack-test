import axios from "axios";

export const taskApi = axios.create({
    baseURL: "https://full-stack-test-krxw.onrender.com",
    timeout: 8*1000
});