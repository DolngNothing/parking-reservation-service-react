export const initBMap = (Bmap) => ({
    type: "INIT_BMAP",
    BMap: Bmap
})
export const setCustomerLng = (lng) => ({
    type: "CUSTOMER_LNG",
    lng
})
export const setCustomerLat = (lat) => ({
    type: "CUSTOMER_LAT",
    lat
})
export const setCustomerAddress = (customerAddress) => ({
    type: "CUSTOMER_ADDRESS",
    customerAddress
})
export const setDestination = (destination) => ({
    type: "DESTINATION",
    destination
})