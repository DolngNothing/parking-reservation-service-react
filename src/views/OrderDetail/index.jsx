import React from 'react'
import OrderDetail from '../../components/common/OrderDetail/index'

class OrderDetailPage extends React.Component {
    componentDidMount() {
        const { bookOrder } = this.props
        console.log(bookOrder)
    }

    render() {
        return (
            <div className="order-detail-page">
                <OrderDetail />
            </div>
        )
    }
}

export default OrderDetailPage