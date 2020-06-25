import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import About from "./components/About";
import Project from "./components/Project";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route
            exact
            path="/project"
            render={(props) => <Project {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
