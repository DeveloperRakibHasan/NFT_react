import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/page/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/page/About'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
}

export default App;
