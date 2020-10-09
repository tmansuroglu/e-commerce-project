import React, { useState } from 'react';
import Products from './containers/MultipleProducts/MultipleProduct';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar.js"
import Home from "./containers/Home/Home.js"
import About from "./containers/About/About.js"
import SingleProductPage from "./containers/SingleProductPage/SingleProductPage"
function App() {

  const [products, setProducts] = useState([
  ])

  const [id, setId] = useState("0");


  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />

        <Route exact path="/products" render={(routerProps) => <Products {...routerProps} id={id} setId={setId} products={products} setProducts={setProducts} />} />
        <Route path="/products/:id">

          <SingleProductPage />
        </Route>
      </Router>


    </div>
  );
}

export default App;
