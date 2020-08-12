import { connect } from 'react-redux'
import OrderCreatePage from '../views/OrderCreatePage'
import { setBookOrder ,saveEmptyPosition} from '../actions/index'

const mapStateToProps = state => {
    return {
      parkingLot: state.parkingLot,
      emptyPosition: state.emptyPosition
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        setBookOrder: (bookOrder) => {
        dispatch(setBookOrder(bookOrder))
      },
      saveEmptyPosition : (emptyPosition) =>{
        dispatch(saveEmptyPosition(emptyPosition))
      }
    }
  }

const OrderCreatePageContainer = connect(mapStateToProps, mapDispatchToProps)(OrderCreatePage)

export default OrderCreatePageContainer