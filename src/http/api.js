import axios from 'axios'

const baseUrl = 'http://10.222.29.209:8090'

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

