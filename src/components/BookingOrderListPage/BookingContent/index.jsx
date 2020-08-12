import React from 'react'
import './index.scss'
import '../../../css/icon.css'
import OrderDetail from '../../common/OrderDetail'

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
              <div className="user-id-input-wrapper">
                <span className="icon-search" />
                <input type="text" placeholder="输入用户ID查询" className="user-id-input" />
              </div>
            </div>
            <div className="booking-content-center">
              <div className="booking-content">
                <OrderDetail
bookOrder={this.props.bookOrder}
                            setBookOrder={this.props.setBookOrder}
                />
              </div>
            </div>
            <div className="show-logo" />
          </div>
)
    }
}

export default BookingContent