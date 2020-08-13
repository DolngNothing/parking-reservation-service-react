import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import IndexContainer from './containers/IndexContainer';
import BookingOrderListContainer from './containers/BookingOrderListContainer'
import 'antd/dist/antd.css';
import OrderCreatePageContainer from './containers/OrderCreatePageContainer'
import OrderDetailContainer from './containers/OrderDetailContainer'
import Comment from './components/common/comment'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" exact component={IndexContainer} />
        <Route path="/bookingOrderList" component={BookingOrderListContainer} />
        <Route path="/orderDetail" component={OrderDetailContainer} />
        <Route path="/orderCreate" component={OrderCreatePageContainer} />
      </HashRouter>
    </div>
  );
}

export default App;
