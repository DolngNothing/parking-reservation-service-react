import React from 'react'
import { Row, Col } from 'antd';
import ParkingLotInfo from '../../components/OrderCreatePage/ParkingLotInfo'
import BookInfoForm from '../../components/OrderCreatePage/BookInfoForm'
import './index.css'

class OrderCreatePage extends React.Component {

  render() {
    return (
<<<<<<< HEAD
      <div>
        <Row>
          <Col offset span={8}><ParkingLotInfo /></Col>
          <Col span={16}><BookInfoForm /></Col>
        </Row>
=======
      <div className="content">
          <div className="item"><ParkingLotInfo /></div>
          <div className="item"><BookInfoForm /></div>
>>>>>>> 5782cf015e37574e7ef1d51913f8dc1971efcda4
      </div>
    );
  }
}

export default OrderCreatePage;