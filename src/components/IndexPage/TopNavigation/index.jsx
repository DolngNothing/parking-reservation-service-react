import React from 'react'
import BMap from 'BMap'
import AMap from 'AMap'
import './index.scss'

class TopNavigation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      address: '',
      regAddress: []
    }
  }

  onChange = (e) => {
    this.setState({
        address: e.target.value
    })
    var options = {
      onSearchComplete: function(results){
        // 判断状态是否正确
        if (local.getStatus() == 0){
          var s = [];
          for (var i = 0; i < results.getCurrentNumPois(); i ++){
            s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
          }
          document.getElementById("r-result").innerHTML = s.join("<br/>");
        }
      }
    };
    var local = new BMap.LocalSearch(this.props.BMap, options);
    local.search(e.target.value);
}

  search = () => {
      var map = this.props.BMap;       
      map.clearOverlays(); 
      let geocoder = new AMap.Geocoder();
      geocoder.getLocation(this.state.address, (status, result) => {
      if (status === 'complete' && result.geocodes.length) {
          console.log("地址: "+result.geocodes[0].formattedAddress)
          const lnglat = result.geocodes[0].location;
          this.props.setDestination(result.geocodes[0].formattedAddress)
          const lat = lnglat.lat; // 纬度
          const lng = lnglat.lng;// 经度
          console.log(`经度为:${lng}, 纬度为:${lat}`);
          var pointCustomer = new BMap.Point(this.props.lng, this.props.lat);
          var customerMarker = new BMap.Marker(pointCustomer);
          map.addOverlay(customerMarker);
          var addressPoint = new BMap.Point(lng, lat);
          var addressMarker = new BMap.Marker(addressPoint);
          map.centerAndZoom(new BMap.Point(lng, lat), 16);
          map.addOverlay(addressMarker);

      } else {
          alert("查无此地")
      }
      });
  }



  handleEnterKey = (e) => {
      if(e.nativeEvent.keyCode === 13){
          this.search()
    }
  }

  render() {
    return <div className="top-navigation-wrapper">
                <div className="about-team">
                    <span>关于我们</span>
                </div>
                <div className="booking-enter">
                    <span>订单查询</span>
                </div>
                <div className="address-input-wrapper">
                    <span  onClick={this.search} className="icon-search search-btn"></span>
                    <input type="text" 
                            className="address-input" 
                            value={this.state.address} 
                            onChange={this.onChange} 
                            onKeyPress={this.handleEnterKey}
                            placeholder="请输入目的地"/>
                    {this.state.regAddress.map(item => <div className="r-result"><span>{item}</span></div>)}
                </div>
            </div>
  }

}

export default TopNavigation