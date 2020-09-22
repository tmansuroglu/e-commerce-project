import React from 'react';
import Products from './products';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav.js"
import Home from "./components/Home.js"
import About from "./components/About.js"
function App() {
  return (
    <div>
      <Router>
        < Nav />
        < Route exact path="/" component={Home} />
        < Route path="/about" component={About} />
        {/*SingleProduct*/}
        <Route path="/products" component={Products} />
      </Router>

    </div>
  );
}

export default App;
