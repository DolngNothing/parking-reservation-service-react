export default (state = {}, action) => {
    switch( action.type ) {
        case 'INIT_BMAP': {
            const stateCopy = {...state}
            stateCopy.BMap = action.BMap
            return stateCopy
        }
        case 'CUSTOMER_LNG': {
            const stateCopy1 = {...state}
            stateCopy1.lng = action.lng
            return stateCopy1
        }
        case 'CUSTOMER_LAT': {
            const stateCopy2 = {...state}
            stateCopy2.lat = action.lat
            return stateCopy2
        }
        case 'CUSTOMER_ADDRESS': {
            const stateCopy3 = {...state}
            stateCopy3.customerAddress = action.customerAddress
            return stateCopy3
        }
        case 'DESTINATION': {
            const stateCopy4 = {...state}
            stateCopy4.destination = action.destination
            return stateCopy4
        }
        case 'SET_PARKINGLOTS': {
            const stateCopy5 = {...state}
            /* console.log(action.parkingLots) */
            stateCopy5.parkingLots = action.parkingLots
            return stateCopy5
        }
        case 'EMPTY_PARKINGLOTS': {
            const stateCopy6 = {...state}
            stateCopy6.parkingLots = []
            return stateCopy6
        }
        default: {
            return state
        }
    }
 }