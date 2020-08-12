import axios from 'axios'
import { message } from 'antd';



axios.defaults.withCredentials = true
axios.defaults.cressDomain = true
axios.defaults.baseUrl = "http://localhost:8090"

const baseUrl = 'http://localhost:8090'

export function getOrder(orderID) {
    return axios({
        method: 'get',
        url: `${baseUrl}/parkingOrders?userId=${orderID}`,
        withCredentials: true
    })
}

export function getOrders() {
    return axios({
        method: 'get',
        url: baseUrl
    })
}

export function saveOrder(order) {
    return axios({
        method: 'post',
        url:`${baseUrl}/parkingOrders`,
        data: order
    })
}

export function getParkingLots(lng, lat, destinationName) {
    return axios({
        method: 'get',
        url: `${baseUrl}/parkingLots?lng=${lng}&lat=${lat}&destinationName=${destinationName}`
    })
}

export function userLogin(userInfo) {
    return axios({
        method: 'post',
        data: userInfo,
        url:`${baseUrl}/user/login`
    })
}

axios.interceptors.response.use(response => {
    console.log("return data")
    if(response.status === 200)
        return Promise.resolve(response)
    return Promise.reject(response)
},error => {
    message.error(error.response.data.message);
})

export function comfirmOrder(orderID) {
    return axios({
        method:'patch',
        url:`${baseUrl}/parkingOrders/${orderID}?type=1`,
        data:{
            status:"ALREADY_SURE"
        }
    })
}

export function cancelOrder(orderID) {
    return axios({
        method:'patch',
        url:`${baseUrl}/parkingOrders/${orderID}`,
        data:{
            status:"DELETED"
        }
    })
}

export function loginTest(userInfo) {
    return axios({
        method: 'post',
        url: `${baseUrl}/user/login`,
        data: userInfo,
        withCredentials: true
    })
}
