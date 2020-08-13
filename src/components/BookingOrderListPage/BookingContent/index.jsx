import React from 'react'
import './index.scss'
import '../../../css/icon.css'
import OrderDetail from '../../common/OrderDetail'
import CommentContainer from '../../../containers/CommentContainer'

class BookingContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
          <div className="booking-content-wrapper">
            <div className="booking-content-center">
              <div className="booking-content">
                {this.props.bookOrder.id !== undefined?(
                  <OrderDetail
                  bookOrder={this.props.bookOrder}
                  setBookOrder={this.props.setBookOrder}
                  />
                  ):''}
                
              </div>
            </div>
            <div className="comment-wrapper">
              <CommentContainer />
            </div>
          </div>
)
    }
}

export default BookingContent