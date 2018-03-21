import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Total from './../components/Total';
// import CartList from './../components/CartList';
import ItemList from './../components/ItemList';

const App = ({ totalShopping, cartListCont, itemListCont }) =>
  <div>
    <div>{ totalShopping }</div>
    <div></div>
    <div>{ itemListCont }</div>
  </div>
  


ReactDOM.render(<App totalShopping={<Total/>} /*cartListCont={<CartList/>}*/ itemListCont={<ItemList/>} />, document.getElementById('app'));
