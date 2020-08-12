import { connect } from 'react-redux'
import OrderDetail from '../views/OrderDetail'
import { setBookOrder } from '../actions/index'

const mapStateToProps = (state) => {
   return {
      bookOrder: state.bookOrder
   }
}

const mapDispatchToProps = dispatch => {
   return {
       setBookOrder: (bookOrder) => {
       dispatch(setBookOrder(bookOrder))
     }
   }
 }

const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
export default OrderContainer