const bookOrder = sessionStorage.getItem('bookOrder')?JSON.parse(sessionStorage.getItem('bookOrder')):{};
const parkingLot = sessionStorage.getItem('parkingLot')?JSON.parse(sessionStorage.getItem('parkingLot')):{};
const userInformation = sessionStorage.getItem('userInformation')?JSON.parse(sessionStorage.getItem('userInformation')):{};
const emptyPosition = sessionStorage.getItem('emptyPosition')?JSON.parse(sessionStorage.getItem('emptyPosition')):{};
const defaultState = {
    bookOrder,
    parkingLot,
    userInformation,
    emptyPosition,
    isModalVisible: false,
    userInfo:null
};




export default (state = defaultState, action) => {
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
            sessionStorage.setItem('parkingLot',JSON.stringify(action.parkingLot))
            stateCopy.parkingLot = action.parkingLot
            return stateCopy
        }
        case 'SAVE_BOOKORDER': {
            sessionStorage.setItem('bookOrder', JSON.stringify(action.order));
            stateCopy.bookOrder = action.order
            return stateCopy
        }
        case 'USER_INFORMATION': {
            sessionStorage.setItem('userInformation', JSON.stringify(action.userInformation));
            stateCopy.userInformation = action.userInformation
            return stateCopy
        }
        case 'SAVE_EMPTYPOSITION': {
            sessionStorage.setItem('emptyPosition', JSON.stringify(action.emptyPosition));
            stateCopy.emptyPosition = action.emptyPosition
            return stateCopy
        }
        default: {
            return state
        }
    }
 }