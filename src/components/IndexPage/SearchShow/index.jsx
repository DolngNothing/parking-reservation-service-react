import React from 'react'
import './index.scss'
import '../../../css/icon.css'
import PropTypes from 'prop-types';

import { Menu, Dropdown, Button } from 'antd';


class SearchShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            address: '',
            sort: '综合排序',
            type: '全部',
            parkingLots: [],
            menuSoft: (
              <Menu>
                <Menu.Item>
                  <span onClick={() => {this.setState({sort: '距离'})}}>
                    距离
                  </span>
                </Menu.Item>
                <Menu.Item>
                <span onClick={() => {this.setState({sort: '价格'})}}>
                    价格
                  </span>
                </Menu.Item>
                <Menu.Item>
                <span onClick={() => {this.setState({sort: '评分'})}}>
                    评分
                  </span>
                </Menu.Item>
                <Menu.Item>
                <span onClick={() => {this.setState({sort: '综合排序'})}}>
                    综合排序
                  </span>
                </Menu.Item>
              </Menu>
            ),
            menuType: (
              <Menu>
                <Menu.Item>
                  <span onClick={() => {this.setState({type: '室内'})}}>
                    室内
                  </span>
                </Menu.Item>
                <Menu.Item>
                <span onClick={() => {this.setState({type: '室外'})}}>
                    室外
                  </span>
                </Menu.Item>
                <Menu.Item>
                <span onClick={() => {this.setState({type: '全部'})}}>
                    全部
                  </span>
                </Menu.Item>
              </Menu>
            )
        }
    }

    sortWell = (a, b) => {
      console.log(this.state.sort)
      if(this.state.sort === '距离') {
        return b.distance - a.distance
      } else if(this.state.sort === '价格') {
        return a.price - b.price
      } else if(this.state.sort === '评分') {
        return b.avgScore - a.avgScore
      } else {
        return (0.5 * (1-b.distance/2000) + 0.25 * (b.avgScore/5.0) + 0.25 * (1-b.price)) - (0.5 * (1-a.distance/2000) + 0.25 * (a.avgScore/5.0) + 0.25 * (1-a.price))
      }
    }

    typeChange = (type) =>{
      if(type === '室内') {
        return 'indoor'
      } else if(type === '室外'){
        return 'open'
      } else {
        return ''
      }
    }

    jumpToOrderCreatePage = (parkingLot) => {
      this.props.setParkingLot(parkingLot)
      this.props.history.push({pathname:"/orderCreate",
      query: { parkingLot }})
    }

    render() {
      const { customerAddress } = this.props
      const { destination } = this.props
      let { parkingLots } = this.props
      if(parkingLots === undefined) {
        parkingLots = []
      }
      parkingLots = parkingLots.sort(this.sortWell)
      console.log(parkingLots)
        return (
          <div className="search-show-wrapper">
            <div className="address-wrapper">
              <div className="customer-address">
                <span className="address-title">所在地: </span>
                <span className="address-text">{customerAddress}</span>
              </div>
              <div className="destination-address">
                <div className="address-title">目的地: </div>
                <div className="address-text">{destination}</div>
              </div>
            </div>
            <div className="select-wrapper">
              <div className="sort-select">
                <Dropdown overlay={this.state.menuSoft} placement="bottomLeft" arrow>
                  <Button>{this.state.sort}</Button>
                </Dropdown>
              </div>
              <div className="type-select">
                <Dropdown overlay={this.state.menuType} placement="bottomRight" arrow>
                  <Button className="type-text">{this.state.type}</Button>
                </Dropdown>
              </div>
            </div>
            <div className="show-wrapper">
                {
                  this.typeChange(this.state.type) === ''?(parkingLots.map((item, index) => <div key={index} 
                  onClick={() => this.jumpToOrderCreatePage(item)}
                  className="parking-lot">
                    <div className="icon-position-wrapper"><span className="icon-position"></span></div>
                    <div className="lot-msg-wrapper">
                      <div className="lot-msg">
                        <span className="lot-name">{item.name}</span>
                        <span className="lot-address">{item.location}</span>
                      </div>
                      <div className="distance-wrapper">
                        <span>距离: {parseInt(item.distance)}M</span>
                      </div>
                    </div>
                    <div className="avg-score">{item.avgScore}</div>
              </div>)
                ) 
                :parkingLots.filter(element => element.type === this.typeChange(this.state.type)).map((item, index) => <div key={index} 
                                                      onClick={() => this.jumpToOrderCreatePage(item)}
                                                      className="parking-lot">
                                                        <div className="icon-position-wrapper"><span className="icon-position"></span></div>
                                                        <div className="lot-msg-wrapper">
                                                          <div className="lot-msg">
                                                            <span className="lot-name">{item.name}</span>
                                                            <span className="lot-address">{item.location}</span>
                                                          </div>
                                                          <div className="distance-wrapper">
                                                            <span>距离: {parseInt(item.distance)}M</span>
                                                          </div>
                                                        </div>
                                                        <div className="avg-score">{item.avgScore}</div>
                                                  </div>
                )
                }
            </div>
          </div>
)
    }

}

SearchShow.propTypes = {
  customerAddress: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  history: PropTypes.func.isRequired,
  parkingLots: PropTypes.array.isRequired
}

export default SearchShow