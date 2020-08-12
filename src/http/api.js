import axios from 'axios'
import { message } from 'antd';

const baseUrl = 'http://10.222.29.146:8090'

export function getOrders() {
    return axios({
        method: 'get',
        url: baseUrl
    })
}

export function saveOrder(order) {
    return axios({
        method: 'post',
        data: order,
        url:`${baseUrl}/parkingOrders`
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

export function getOrder(orderID) {
    return axios({
        method: 'get',
        url: `${baseUrl}/parkingOrders?userId=${orderID}`,
        withCredentials: true
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