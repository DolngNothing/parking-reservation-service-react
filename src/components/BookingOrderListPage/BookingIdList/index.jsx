import React from 'react'
import './index.scss'
import '../../../css/icon.css'
import { userLogin, getOrder } from '../../../http/api'

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

    componentDidMount() {
      userLogin({
        phoneNumber: "13427560238",
        password: "123"
      }).then(() => {
        getOrder(23).then((response) => {
          console.log(response)
        })
      })
    }

    render() {
        const { idList } = this.state
        return (
          <div className="booking-id-list">
            <div className="title-text">订单编号</div>
            {idList.map((item, index) => (
              <div className="id-text" key={index}>
                <span className="icon-booking" />
                {item}
              </div>
))}
          </div>
)
    }
}

export default BookingIdList