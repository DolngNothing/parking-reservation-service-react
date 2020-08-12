import { connect } from 'react-redux'
import bookingOrderList from '../views/bookingOrderList'
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

const bookingOrderListContainer = connect(mapStateToProps, mapDispatchToProps)(bookingOrderList);
export default bookingOrderListContainer