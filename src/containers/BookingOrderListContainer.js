import { connect } from 'react-redux'
import bookingOrderList from '../views/bookingOrderList'
import { setBookOrder, setComment } from '../actions/index'

const mapStateToProps = (state) => {
   return {
      bookOrder: state.bookOrder
   }
}

const mapDispatchToProps = dispatch => {
   return {
       setBookOrder: (bookOrder) => {
        dispatch(setBookOrder(bookOrder))
        },
        setComment: (comment) =>{
            dispatch(setComment(comment))
        }
   }
 }

const bookingOrderListContainer = connect(mapStateToProps, mapDispatchToProps)(bookingOrderList);
export default bookingOrderListContainer