const initState = {
    isModalVisible: false,
    userInfo:null
}
export default (state = initState, action) => {
    const stateCopy = {...state}
    switch( action.type ) {
        case 'INIT_BMAP': {
            stateCopy.BMap = action.BMap
            return stateCopy
        }
        case 'CUSTOMER_LNG': {
            stateCopy.lng = action.lng
            return stateCopy
        }
        case 'CUSTOMER_LAT': {
            stateCopy.lat = action.lat
            return stateCopy
        }
        case 'CUSTOMER_ADDRESS': {
            stateCopy.customerAddress = action.customerAddress
            return stateCopy
        }
        case 'DESTINATION': {
            stateCopy.destination = action.destination
            return stateCopy
        }
        case 'SET_PARKINGLOTS': {
            /* console.log(action.parkingLots) */
            stateCopy.parkingLots = action.parkingLots
            return stateCopy
        }
        case 'EMPTY_PARKINGLOTS': {
            stateCopy.parkingLots = []
            return stateCopy
        }
        case 'SET_PARKINGLOT': {
            stateCopy.parkingLot = action.parkingLot
            return stateCopy
        }
        case 'SAVE_BOOKORDER': {
            stateCopy.bookOrder = action.bookOrder
            return stateCopy
        }
        case 'CHANGE_VISIBLE': {
            stateCopy.isModalVisible = action.isModalVisible
            return stateCopy
        }
        case 'SAVE_LOGIN_STATUS': {
            stateCopy.userInfo = action.userInfo
            console.log("stateCopy",stateCopy)
            return stateCopy
        }
        default: {
            return state
        }
    }
 }