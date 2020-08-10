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
        return (
          <div className="booking-content-wrapper">
            <div className="top-search"><span>输入手机号查询</span></div>
            <div className="booking-content-center">
              <div className="booking-content">
                <div className="content-title">
                  订单详情
                </div>
                <div className="content-table">
                  <table border="1" bordercolor="#cc0000">
                    <tbody>
                    <tr>
                      <th>停车场</th>
                      <td>xxx停车场</td>
                      <th>位置</th>
                      <td style={{width: "200px"}}>香洲区xxx路xx</td>
                      <th>车牌号</th>
                      <td style={{width: "180px"}}>粤C88888</td>
                    </tr>
                    <tr>
                      <th>时间段</th>
                      <td>2020/08/09 15:30 - 2020/08/09 16:00</td>
                      <th>手机</th>
                      <td style={{width: "200px"}}>13811111111</td>
                      <th>邮箱</th>
                      <td style={{width: "180px"}}>88888888@qq.com</td>
                    </tr>
                    <tr>
                      <th>费用</th>
                      <td>¥12</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="show-logo" />
          </div>
)
    }
}

export default BookingContent