import React from 'react'
import BMap from 'BMap'
import AMap from 'AMap'
import './index.scss'
import { getParkingLots, parkingLots } from '../../../http/api'
import { Button } from 'antd';
import logo from './logo.jpg'

class TopNavigation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      address: '',
      regAddress: [],
      display: 'none'
    }
  }


  onChange = (e) => {
    this.setState({
        address: e.target.value,
        regAddress: []
    })
    const _this = this
    const map = this.props.BMap
    const options = {
      onSearchComplete(results){
        // 判断状态是否正确
        if (local.getStatus() === 0){
          const s = [];
          for (let i = 0; i < results.getCurrentNumPois(); i+=1){
            s.push({
              title: results.getPoi(i).title, 
              point: results.getPoi(i).point
            });
          }
          _this.setState({regAddress: [...s]})
        }
      }
    };
    const local = new BMap.LocalSearch(map, options);
    local.search(e.target.value);
}

  search = () => {
      const map = this.props.BMap
      map.clearOverlays(); 
      this.getLngAndLat(this.state.address, map)
  }

  getLngAndLat = (address,map) => {
    const geocoder = new AMap.Geocoder();
    geocoder.getLocation(address, (status, result) => {
      if (status === 'complete' && result.geocodes.length) {
          console.log(`地址: ${result.geocodes[0].formattedAddress}`)
          const lnglat = result.geocodes[0].location;
          this.props.setDestination(result.geocodes[0].formattedAddress)
          const {lat} = lnglat; // 纬度
          const {lng} = lnglat;// 经度
          console.log(`经度为:${lng}, 纬度为:${lat}`);
          const pointCustomer = new BMap.Point(this.props.lng, this.props.lat);
          const customerMarker = new BMap.Marker(pointCustomer);
          map.addOverlay(customerMarker);
          const addressPoint = new BMap.Point(lng, lat);
          const addressMarker = new BMap.Marker(addressPoint);
          map.centerAndZoom(new BMap.Point(lng, lat), 16);
          map.addOverlay(addressMarker);
      } else {
          alert("查无此地")
      }
    });
    this.setState({
      regAddress: [],
    })
  }

  selectAddress = (point, title) => {
    const map = this.props.BMap 
    map.clearOverlays(); 
    this.setState({
      address: title
    })
    const _this = this
    getParkingLots(point.lng, point.lat, title).then((response) => {
      _this.props.setParkingLots(response.data)
    }).catch(error =>{})

    const destinationMarker = new BMap.Marker(point);
    map.centerAndZoom(new BMap.Point(point.lng, point.lat), 16);
    map.addOverlay(destinationMarker);
    const pointCustomer = new BMap.Point(this.props.lng, this.props.lat);
    const customerMarker = new BMap.Marker(pointCustomer);
    map.addOverlay(customerMarker);
    this.props.setDestination(title)
    this.setState({
      regAddress: [],
    })
  }

  handleEnterKey = (e) => {
      if(e.nativeEvent.keyCode === 13){
          this.search()
    }
  }

  changeModalDisplay = () => {
    /* if(this.props.userInfo === null || !sessionStorage.getItem("userInformation")) */
    if(!sessionStorage.getItem("userInformation")){
      this.props.changeVisible(true)
    } 
  }

  jumpToOrderList = () => {
    if(sessionStorage.getItem('userInformation')) {
      this.props.history.push({pathname:"/bookingOrderList"})
    } else {
      alert("请先登录")
    }
    
  }

  cancelUser = () => {
    this.setState({
      display: 'none'
    })
    sessionStorage.removeItem("userInformation")
    alert("已注销")
  }

  render() {
    return (
      <div className="top-navigation-wrapper">
        <div className="about-team">
          <img src={logo} className="img"/>
        </div>
        <div className="booking-enter">
          <span onClick={this.jumpToOrderList}>订单查询</span>
        </div>
        <div className="address-input-wrapper">
          <span className="icon-search search-btn" />
          {/* <span onClick={this.search} className="icon-search search-btn" /> */}
          <input
            type="text" 
            className="address-input" 
            value={this.state.address} 
            onChange={this.onChange} 
            /* onKeyPress={this.handleEnterKey} */
            placeholder="请输入目的地"
          />
          <div className="reg-address-list">
            {this.state.regAddress.map((item, index) => (
              <div className="r-result" key={index}>
                <span className="icon-position" />
                <span onClick={() => this.selectAddress(item.point, item.title)} className="reg-address">{item.title}</span>
              </div>
))}
          </div>   
        </div>
        
          {sessionStorage.getItem("userInformation")?(<div className="img-wrapper">
          <img className="img" src="https://pic3.zhimg.com/v2-ccfdc90c69dce8e0227960b45aa53c02_r.jpg" alt=""/>
        </div>)
            :(<div className="user-login"><span className="icon-user" onClick={this.changeModalDisplay}></span></div>)
          }
          <div className={sessionStorage.getItem("userInformation")?"cancel-wrapper":"cancel-hidden"} onClick={this.cancelUser}>
            <Button danger>注销</Button>
          </div>
      </div>
)
  }

}

export default TopNavigation