import { connect } from 'react-redux'
import OrderCreatePage from '../views/OrderCreatePage'
import { setBookOrder } from '../actions/index'

const mapStateToProps = state => {
    return {
      parkingLot: state.parkingLot
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        setBookOrder: (bookOrder) => {
        dispatch(setBookOrder(bookOrder))
      }
    }
  }

const OrderCreatePageContainer = connect(mapStateToProps, mapDispatchToProps)(OrderCreatePage)

export default OrderCreatePageContainer