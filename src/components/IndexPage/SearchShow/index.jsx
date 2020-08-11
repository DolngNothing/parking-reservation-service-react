import React from 'react'
import './index.scss'
import '../../../css/icon.css'
import PropTypes from 'prop-types';

class SearchShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            address: '',
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
            <div className="show-wrapper">
                {parkingLots.map((item, index) => <div key={index} 
                                                      onClick={() => this.jumpToOrderCreatePage(item)}
                                                      className="parking-lot">
                                                        {item.name}
                                                        </div>
                )}
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