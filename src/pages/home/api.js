import axios from "axios"
// import {token,apilink} from "../config"
const token = process.env.REACT_APP_TOKEN
const apilink = process.env.REACT_APP_BASE_URL

export const getTableData = ()=>{
    return axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
}



