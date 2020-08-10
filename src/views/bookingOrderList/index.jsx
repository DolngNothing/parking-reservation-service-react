import React from 'react'
import BookingIdList from '../../components/BookingOrderListPage/BookingIdList'
import BookingContent from '../../components/BookingOrderListPage/BookingContent'

class BookingOrderList extends React.Component {
    render() {
        return (
          <div className="booking-list-page">
            <BookingIdList />
            <BookingContent />
          </div>
        )
    }
}

export default BookingOrderList