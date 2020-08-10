import React from 'react'
import './index.scss'
import '../../../css/icon.css'

class BookingIdList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idList: [
                "xxxxxxxxxxxxx",
                "xxxxxxxxxxxxx",
                "xxxxxxxxxxxxx",
                "xxxxxxxxxxxxx",
                "xxxxxxxxxxxxx",
                "xxxxxxxxxxxxx",
                "xxxxxxxxxxxxx",
                "xxxxxxxxxxxxx",
                "xxxxxxxxxxxxx",
            ]
        }
    }

    render() {
        return <div className="booking-id-list">
                <div className="title-text">订单编号</div>
                {this.state.idList.map((item, index) => <div className="id-text" key={index}><span className="icon-booking"></span>{item}</div>)}
            </div>
    }
}

export default BookingIdList