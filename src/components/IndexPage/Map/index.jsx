import React from 'react'
import './index.scss'
import BMap from 'BMap'
import PropTypes from 'prop-types';

class Map extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            customerLng: 0,
            customerLat: 0 
        }
    }

    componentDidMount() {
        const map = new BMap.Map("allmap")
        const { initBMap } = this.props
        initBMap(map)
        const geolocation = new BMap.Geolocation();
        const _this=this
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() === 0){
                const mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                // todo 精确
                _this.props.setCustomerAddress(r.address.province + r.address.city)
                map.panTo(r.point);
                _this.setState({
                    customerLat: r.point.lat,
                    customerLng: r.point.lng
                })
                _this.props.setCustomerLng(r.point.lng)
                _this.props.setCustomerLat(r.point.lat)
                map.centerAndZoom(new BMap.Point(r.point.lng, r.point.lat), 16);
                map.enableScrollWheelZoom(true); 
            }
            else {
                alert(`failed${this.getStatus()}`);
            }        
        },{enableHighAccuracy: true})
    }


    render() {
        return  (
          <div className="map-wrapper">
            <div id="allmap" />
          </div>
        )    
    }

}
Map.propTypes = {
    initBMap: PropTypes.func.isRequired
    
  }

export default Map