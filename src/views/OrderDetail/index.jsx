import React from 'react'
import OrderDetail from '../../components/common/OrderDetail/index'

class OrderDetailPage extends React.Component {
    render() {
        return (
            <div className="order-detail-page">
                <OrderDetail
                    bookOrder={this.props.bookOrder}
                    setBookOrder={this.props.setBookOrder}
                />
            </div>
        )
    }
}

export default OrderDetailPage