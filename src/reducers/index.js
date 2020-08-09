export default (state = {}, action) => {
    switch( action.type ) {
        case 'INIT_BMAP':
            let stateCopy = {...state}
            stateCopy.BMap = action.BMap
            return stateCopy
        case 'CUSTOMER_LNG':
            let stateCopy1 = {...state}
            stateCopy1.lng = action.lng
            return stateCopy1
        case 'CUSTOMER_LAT':
            let stateCopy2 = {...state}
            stateCopy2.lat = action.lat
            return stateCopy2
        case 'CUSTOMER_ADDRESS':
            let stateCopy3 = {...state}
            stateCopy3.customerAddress = action.customerAddress
            return stateCopy3
        case 'DESTINATION':
            let stateCopy4 = {...state}
            stateCopy4.destination = action.destination
            return stateCopy4
        default:
             return state
    }
 }