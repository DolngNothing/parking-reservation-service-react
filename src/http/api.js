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
        data: order,
        url:baseUrl
    })
}

export function getParkingLots() {
    return axios({
        method: 'get',
        url: baseUrl
    })
}