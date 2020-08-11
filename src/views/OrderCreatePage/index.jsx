import React from 'react'
import ParkingLotInfo from '../../components/OrderCreatePage/ParkingLotInfo'
import BookInfoForm from '../../components/OrderCreatePage/BookInfoForm'
import { Row, Col } from 'antd';
import './index.css'

class OrderCreatePage extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col offset span={8}><ParkingLotInfo /></Col>
          <Col span={16}><BookInfoForm /></Col>
        </Row>
      </div>
    );
  }
}

export default OrderCreatePage;