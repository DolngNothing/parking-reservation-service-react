import { connect } from 'react-redux'
import OrderDetail from '../components/common/OrderDetail/index'

const mapStateToProps = (state) => {
   return {
      bookOrder: state.bookOrder
   }
}

const TodoListContainer = connect(mapStateToProps, null)(OrderDetail);
export default TodoListContainer