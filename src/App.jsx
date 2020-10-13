import React from 'react'
import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import ShopList from './components/Shop/ShopList.jsx';
import Product from './components/Product/Product.jsx';
import Contact from './components/Contact/Contact.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import products from './products.json';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={() => (
            <ShopList products={products} />
          )} />
          <Route path="/shop/:id" component={Product} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;