import React from 'react'
import BookingIdList from '../../components/BookingOrderListPage/BookingIdList'

class BookingOrderList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="booking-list-page">
            <BookingIdList />
        </div>
    }
}

export default BookingOrderList