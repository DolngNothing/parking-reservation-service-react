import React from 'react'
import PropTypes from 'prop-types';
import { PageHeader } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import ParkingLotInfo from '../../components/OrderCreatePage/ParkingLotInfo'
import BookInfoForm from '../../components/OrderCreatePage/BookInfoForm'
import './index.css'

class OrderCreatePage extends React.Component {

  render() {
    return (
      <div>
        <PageHeader>
          <Link to="/">
            <span className="span-back">
              <LeftOutlined />
                  返回首页
            </span>
          </Link>
      &nbsp;&nbsp;|
        </PageHeader>
        <div className="container">
          <div className="content">
            <div className="item">
              <ParkingLotInfo
                parkingLot={this.props.parkingLot}
                emptyPosition={this.props.emptyPosition}
              />
            </div>
            <div className="item">
              <BookInfoForm
                parkingLot={this.props.parkingLot}
                setBookOrder={this.props.setBookOrder}
                history={this.props.history}
                saveEmptyPosition={this.props.saveEmptyPosition}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


OrderCreatePage.propTypes = {
  parkingLot: PropTypes.object.isRequired,
  setBookOrder: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default OrderCreatePage;