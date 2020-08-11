
export default (state = {}, action) => {
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
        default: {
            return state
        }
    }
 }