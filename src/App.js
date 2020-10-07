import React, { useState } from 'react';
import Products from './containers/MultipleProducts/MultipleProduct';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Navbar.js"
import Home from "./containers/Home/Home.js"
import About from "./containers/About/About.js"
function App() {

  const [products, setProducts] = useState([
  ])

  const [id, setId] = useState("0");


  return (
    <div>
      <Router>
        < Nav />
        < Route exact path="/" component={Home} />
        < Route path="/about" component={About} />
        <Route path="/products" render={(routerProps) => <Products {...routerProps} id={id} setId={setId} products={products} setProducts={setProducts} />} />
      </Router>

    </div>
  );
}

export default App;
//  <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />
