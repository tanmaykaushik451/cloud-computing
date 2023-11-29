import axios from "axios"
// import {token,apilink} from "../config"
const token = process.env.REACT_APP_TOKEN
const apilink = process.env.REACT_APP_BASE_URL

export const getExchanges = ()=>{
    return axios.get(`https://api.coingecko.com/api/v3/exchanges`)
}
