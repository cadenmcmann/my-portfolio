import React from "react";
import NavBar from "./components/NavBar";
import { Router, Route } from "react-router-dom";
import history from "./history";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Biography from "./components/Biography";
import Portfolio from "./components/Portfolio";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={Biography} />
          <Route path="/portfolio" exact component={Portfolio} />
        </Router>
      </div>
    );
  }
}

export default App;
