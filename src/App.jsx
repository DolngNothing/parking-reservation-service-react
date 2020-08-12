import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import IndexContainer from './containers/IndexContainer';
import BookingOrderList from './views/bookingOrderList'
import 'antd/dist/antd.css';
import OrderCreatePageContainer from './containers/OrderCreatePageContainer'
import OrderDetailContainer from './containers/OrderDetailContainer'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" exact component={IndexContainer} />
        <Route path="/bookingOrderList" component={BookingOrderList} />
        <Route path="/orderDetail" component={OrderDetailContainer} />
        <Route path="/orderCreate" component={OrderCreatePageContainer} />
      </HashRouter>
    </div>
  );
}

export default App;
