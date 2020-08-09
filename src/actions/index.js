export const initBMap = (BMap) => ({
    type: "INIT_BMAP",
    BMap: BMap
})
export const setCustomerLng = (lng) => ({
    type: "CUSTOMER_LNG",
    lng: lng
})
export const setCustomerLat = (lat) => ({
    type: "CUSTOMER_LAT",
    lat: lat
})
export const setCustomerAddress = (customerAddress) => ({
    type: "CUSTOMER_ADDRESS",
    customerAddress: customerAddress
})
export const setDestination = (destination) => ({
    type: "DESTINATION",
    destination: destination
})