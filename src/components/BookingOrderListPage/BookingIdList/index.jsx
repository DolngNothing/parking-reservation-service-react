import React from 'react'
import './index.scss'
import '../../../css/icon.css'
import { getOrder } from '../../../http/api'


class BookingIdList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orderList: []
        }
    }
    
    componentWillMount() {
        const userInformation = JSON.parse(sessionStorage.getItem('userInformation'))
        getOrder(userInformation.id).then((res) => {
          this.setState({
            orderList: [...res.data]
          })

        })
      
    }

    getOrderStatus = (status) => {
      if (status === "ALREADY_SURE") {
        return "预约成功"
      } if (status === "WAIT_FOR_SURE") {
        return "等待确认"
      }
      return "已取消"
    }

    selectOrder = (item) => {
      this.props.setBookOrder(item)
    }

    render() {
        const { orderList } = this.state
        return (
          <div className="booking-id-list">
            <div className="title-text">
<span className="icon-booking" />
历史订单
            </div>
            {orderList.map((item, index) => (
              <div className="booking-order-wrapper" key={index} onClick={() => {this.selectOrder(item)}}>
              <div className="parking-lot-msg-wrapper">
                <div className="parking-lot-name-wrapper">
            <span className="parking-lot-name">{item.parkingLotName}</span>
            <span className="parking-lot-address">{item.location}</span>
                </div>
                <div className="price-wrapper">
            <span className="price-text">{item.price}</span>
                  <span className="price-char">元</span>
                </div>
              </div>
              <div className="time-status-wrapper">
                <div className="time-wrapper">
            <span className="month">{item.parkingStartTime}</span>
                </div>
                <div className="status-wrapper">
            <span className="status">{this.getOrderStatus(item.status)}</span>
                </div>
              </div>
              </div>
            )
            )}
            
          </div>
)
    }
}

export default BookingIdList