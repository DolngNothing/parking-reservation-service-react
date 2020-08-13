import React from 'react'
import { PageHeader } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import OrderDetail from '../../components/common/OrderDetail/index'

class OrderDetailPage extends React.Component {
    render() {
        return (
            <div className="order-detail-page">
                <PageHeader>
                    <Link to="/">
                        <span className="span-back">
                            <LeftOutlined />
                                返回首页
                        </span>
                    </Link>
                    &nbsp;&nbsp;|
                </PageHeader>
                <OrderDetail
                    bookOrder={this.props.bookOrder}
                    setBookOrder={this.props.setBookOrder}
                />
            </div>
        )
    }
}

export default OrderDetailPage