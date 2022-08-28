import axios from "axios";

export const request = axios.create({
    baseURL:'http://geek.itheima.net/v1_0/',
    timeout:5000
})