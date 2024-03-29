import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Model from './components/Model';
import Details from './components/Details';
import ProductList from './components/ProductList';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProductList}>
        </Route>
        <Route path="/details" component={Details}>
        </Route>
        <Route path="/cart" component={Cart}>
        </Route>
        <Route component={Default}>
        </Route>
      </Switch>
      <Model />
    </React.Fragment>
  );
}

export default App;
