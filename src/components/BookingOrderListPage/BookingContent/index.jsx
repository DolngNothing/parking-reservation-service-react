import React from 'react'
import './index.scss'
import '../../../css/icon.css'

class BookingContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return <div className="booking-content-wrapper">
                <div className="top-search"><span>输入手机号查询</span></div>
                <div className="booking-content"></div>
                <div className="show-logo"></div>
            </div>
    }
}

export default BookingContent