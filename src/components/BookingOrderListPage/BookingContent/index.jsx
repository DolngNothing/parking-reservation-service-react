import React from 'react'
import './index.scss'
import '../../../css/icon.css'
import { Link } from "react-router-dom";
import OrderDetail from '../../common/OrderDetail'
import Comment from '../../common/comment'

class BookingContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
          <div className="booking-content-wrapper">
            <div className="top-search">
              <Link to="/">回到首页</Link>
            </div>
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
              <Comment />
            </div>
          </div>
)
    }
}

export default BookingContent