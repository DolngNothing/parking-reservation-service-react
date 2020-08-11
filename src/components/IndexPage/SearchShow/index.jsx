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

    render() {
      const { customerAddress } = this.props
      const { destination } = this.props
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
              <div id="se-result" />
            </div>
          </div>
)
    }

}

SearchShow.propTypes = {
  customerAddress: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired
}

export default SearchShow