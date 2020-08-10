import React from 'react'
import { Row, Col } from 'antd';
import ParkingLotInfo from '../../components/OrderCreatePage/ParkingLotInfo'
import BookInfoForm from '../../components/OrderCreatePage/BookInfoForm'
import './index.css'

class OrderCreatePage extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col span={8}><ParkingLotInfo /></Col>
          <Col span={16}><BookInfoForm /></Col>
        </Row>
        
        
      </div>
    );
  }
}

export default OrderCreatePage;