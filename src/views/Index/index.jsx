import React from 'react'
import Map from '../../components/IndexPage/Map/index'
import './index.scss'
import SearchShow from '../../components/IndexPage/SearchShow'
import TopNavigation from '../../components/IndexPage/TopNavigation'
import { CollectionCreateForm } from '../../components/IndexPage/Login/loginForm'

class Index extends React.Component {

    constructor(props) {
      super(props)
      this.props.setParkingLots([])
    }

    render() {
        return (
          <div className="index-page">
            <TopNavigation
              BMap={this.props.BMap} 
              lng={this.props.lng}
              lat={this.props.lat}
              setDestination={this.props.setDestination}
              setParkingLots={this.props.setParkingLots}
              changeVisible={this.props.changeVisible}
              history={this.props.history}
              userInfo={this.props.userInfo}
            />
            <SearchShow
              customerAddress={this.props.customerAddress}
              destination={this.props.destination}
              parkingLots={this.props.parkingLots}
              history={this.props.history}
              setParkingLot={this.props.setParkingLot}
            />
            <CollectionCreateForm
              changeValidStatus={this.props.changeValidStatus}
              flag={this.props.flag}
              saveLoginStatus={this.props.saveLoginStatus}
              isModalVisible={this.props.isModalVisible}
              changeVisible={this.props.changeVisible}
            />
            <Map
              initBMap={this.props.initBMap} 
              BMap={this.props.BMap} 
              setCustomerLng={this.props.setCustomerLng} 
              setCustomerLat={this.props.setCustomerLat}
              setHiddenSearch={this.props.setHiddenSearch}
              setCustomerAddress={this.props.setCustomerAddress}
            />
          </div>
)
    }
}

export default Index