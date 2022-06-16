import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/page/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/page/About'
import Explore from './components/page/Explore';
import Contact from './components/page/Contact';
import SingleProduct from './components/explore/singleproduct/SingleProduct';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/explore/:id" component={SingleProduct} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
