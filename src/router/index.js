import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../views/About";
import Login from "../views/Auth/Login";
import Contact from "../views/Contact";
import NotFound from "../views/errors/NotFound";
import Home from "../views/Home";
import Index from "../views/users/Index";
import UsersDetail from "../views/users/UsersDetail";

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

      <Route exact path="/users">
        <Navbar>
          <Index />
        </Navbar>
      </Route>

      <Route path="/users/:identifier">
        <Navbar>
          <UsersDetail />
        </Navbar>
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Router;
