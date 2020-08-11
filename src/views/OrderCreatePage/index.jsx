import React from 'react'
import ParkingLotInfo from '../../components/OrderCreatePage/ParkingLotInfo'
import BookInfoForm from '../../components/OrderCreatePage/BookInfoForm'
import './index.css'

class OrderCreatePage extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="item"><ParkingLotInfo /></div>
          <div className="item"><BookInfoForm /></div>
        </div>
      </div>
    );
  }
}

export default OrderCreatePage;