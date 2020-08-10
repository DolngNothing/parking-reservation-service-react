import React from 'react'
import ParkingLotInfo from '../../components/OrderCreatePage/ParkingLotInfo'
import BookInfoForm from '../../components/OrderCreatePage/BookInfoForm'

class OrderCreatePage extends React.Component{

    render(){
        return (
          <div>
            <ParkingLotInfo />
            <BookInfoForm />
          </div>
        );
    }
}

export default OrderCreatePage;