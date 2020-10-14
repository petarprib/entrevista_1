import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import ShopList from './components/Shop/ShopList.jsx';
import Product from './components/Product/Product.jsx';
import Contact from './components/Contact/Contact.jsx';
import CartList from './components/Cart/CartList.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const App = () => {
  const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem("cartList") || "[]"));

  let handleAddToCart = (addedProduct) => {
    let newCartList = cartList;

    if (addedProduct.id === "GR1") {
      addedProduct.quantity *= 2;
    }

    let match = false;
    for (let i = 0; i < newCartList.length; i++) {
      if (newCartList[i].id === addedProduct.id) {
        newCartList[i].quantity += addedProduct.quantity;
        match = true;
        break;
      }
    }

    if (!match) {
      newCartList.push(addedProduct);
    }

    localStorage.setItem("cartList", JSON.stringify(newCartList));
    setCartList(newCartList);
  }

  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={ShopList} />
          <Route path="/shop/:id" component={() => (
            <Product handleAddToCart={(addedProduct) => handleAddToCart(addedProduct)} />
          )} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={() => (
            <CartList cartList={cartList} />
          )} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;