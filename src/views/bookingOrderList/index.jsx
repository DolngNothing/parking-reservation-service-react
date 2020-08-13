import React from 'react'
import { PageHeader } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import BookingIdList from '../../components/BookingOrderListPage/BookingIdList'
import BookingContent from '../../components/BookingOrderListPage/BookingContent'
import './index.scss'

class BookingOrderList extends React.Component {

  render() {
    return (
      <div className="booking-list-page">
        <PageHeader>
          <Link to="/">
            <span className="span-back">
              <LeftOutlined />
            返回首页
            </span>
          </Link>
          &nbsp;&nbsp;|
          <span className="span-title">订单详情</span>
        </PageHeader>
        <BookingIdList
          setBookOrder={this.props.setBookOrder}
          bookOrder={this.props.bookOrder}
        />
        <BookingContent
          bookOrder={this.props.bookOrder}
          setBookOrder={this.props.setBookOrder}
        />
      </div>
    )
  }
}

export default BookingOrderList