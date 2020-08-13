import { connect } from 'react-redux'
import Index from '../views/Index'
import { initBMap, setCustomerLat, setCustomerLng, setCustomerAddress, setDestination, setParkingLots, emptyParkingLots, setParkingLot, changeVisible, saveLoginStatus, setUserInformation, changeValidStatus, setBookOrder } from '../actions/index'

const mapStateToProps = state => {
    return {
      BMap: state.BMap,
      lat: state.lat,
      lng: state.lng,
      customerAddress: state.customerAddress,
      destination: state.destination,
      parkingLots: state.parkingLots,
      parkingLot: state.parkingLot,
      isModalVisible: state.isModalVisible,
      userInfo: state.userInfo,
      flag: state.flag
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      initBMap: (BMap) => {
          dispatch(initBMap(BMap))
      },
      setCustomerLng: (lng) => {
    	  dispatch(setCustomerLng(lng))
			},
			setCustomerLat: (lat) => {
				dispatch(setCustomerLat(lat))
      },
      setCustomerAddress: (customerAddress) => {
        dispatch(setCustomerAddress(customerAddress))
      },
      setDestination: (destination) => {
        dispatch(setDestination(destination))
      },
      setParkingLots: (parkingLots) => {
        dispatch(setParkingLots(parkingLots))
      },
      emptyParkingLots: () => {
        dispatch(emptyParkingLots())
      },
      setParkingLot: (parkingLot) => {
        dispatch(setParkingLot(parkingLot))
      },
      changeVisible: (isModalVisible) => {
        dispatch(changeVisible(isModalVisible))
      },
      saveLoginStatus: (userInfo) => {
        dispatch(saveLoginStatus(userInfo))
      },
      setUserInformation: (userInformation) => {
        dispatch(setUserInformation(userInformation))
      },
      changeValidStatus: (flag) => {
        dispatch(changeValidStatus(flag))
      },
      setBookOrder: (bookOrder) => {
        dispatch(setBookOrder(bookOrder))
      }
    }
  }
  
const IndexContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Index)

export default IndexContainer