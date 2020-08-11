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
            <div className="top-search"><span>输入手机号查询</span></div>
            <div className="booking-content-center">
              <div className="booking-content">
                <OrderDetail />
              </div>
            </div>
            <div className="show-logo" />
          </div>
)
    }
}

export default BookingContent