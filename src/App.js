import React from 'react';
import './App.css';
import IndexContainer from './containers/IndexContainer';
import OrderDetail from './views/OrderDetail'
import { HashRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" exact component={IndexContainer} />
        <Route path="/orderDetail" component={OrderDetail} />
      </HashRouter>
    </div>
  );
}

export default App;
