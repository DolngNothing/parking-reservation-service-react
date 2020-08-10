import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import IndexContainer from './containers/IndexContainer';
import OrderDetail from './views/OrderDetail'
import BookingOrderList from './views/bookingOrderList'
import 'antd/dist/antd.css';
import OrderCreatePageContainer from './containers/OrderCreatePageContainer'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" exact component={IndexContainer} />
        <Route path="/orderDetail" component={OrderDetail} />
        <Route path="/bookingOrderList" component={BookingOrderList} />
        <Route path="/OrderCreatePageContainer" component={OrderCreatePageContainer} />
      </HashRouter>
    </div>
  );
}

export default App;
