import React from 'react'
import OrderDetail from '../../components/common/OrderDetail/index'
import './index.css'

class OrderDetailPage extends React.Component {
    render() {
        return (
            <div className="order-detail-page">
                <OrderDetail />
            </div>
        )
    }
}

export default OrderDetailPage