import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";

function Router(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}

export default Router;
