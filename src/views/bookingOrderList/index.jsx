import React from 'react'
import BookingIdList from '../../components/BookingOrderListPage/BookingIdList'
import BookingContent from '../../components/BookingOrderListPage/BookingContent'

class BookingOrderList extends React.Component {

    render() {
        return (
          <div className="booking-list-page">
            <BookingIdList setBookOrder={this.props.setBookOrder} />
            <BookingContent
bookOrder={this.props.bookOrder}
                            setBookOrder={this.props.setBookOrder}
            />
          </div>
        )
    }
}

export default BookingOrderList