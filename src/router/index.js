import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../views/About";
import Login from "../views/Auth/Login";
import Contact from "../views/Contact";
import NotFound from "../views/errors/NotFound";
import Home from "../views/Home";

function Router(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Navbar>
          <Home />
        </Navbar>
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/about">
        <Navbar>
          <About />
        </Navbar>
      </Route>

      <Route path="/contact">
        <Navbar>
          <Contact />
        </Navbar>
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Router;
