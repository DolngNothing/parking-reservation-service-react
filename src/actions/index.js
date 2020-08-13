export const initBMap = (BMap) => ({
    type: "INIT_BMAP",
    BMap
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
export const setParkingLots = (parkingLots) => ({
    type: "SET_PARKINGLOTS",
    parkingLots
})
export const emptyParkingLots = () => ({
    type: "EMPTY_PARKINGLOTS"
})

export const setParkingLot = (parkingLot) => ({
    type: "SET_PARKINGLOT",
    parkingLot
})

export const setBookOrder = (order) => ({
    type: "SAVE_BOOKORDER",
    order
})

export const changeVisible = (isModalVisible) => ({
    type: "CHANGE_VISIBLE",
    isModalVisible
})

export const saveLoginStatus = (userInfo) => ({
    type: "SAVE_LOGIN_STATUS",
    userInfo
})

export const isLoginModelShow = (show) => ({
    type: "LOGIN_MODEL",
    show
})

export const setUserInformation = (userInformation) => ({
    type: "USER_INFORMATION",
    userInformation
})

export const changeValidStatus = (flag) => ({
    type: "CHANGE_VALID_STATUS",
    flag
})

export const saveEmptyPosition = (emptyPosition) => ({
    type: "SAVE_EMPTYPOSITION",
    emptyPosition
})
export const setQrCode = (qrCode) => ({
    type: "QR_CODE",
    qrCode
})