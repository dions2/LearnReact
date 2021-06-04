import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import * as Middleware from "../middleware/App";

import About from "../views/About";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
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
          <Middleware.Authenticated render={<Home/>}/>
        </Navbar>
      </Route>

      <Route path="/login">
        <Middleware.Guest render={<Login />}/>
      </Route>

      <Route path="/register">
        <Middleware.Guest render={<Register />}/>
      </Route>

      <Route path="/about">
        <Navbar>
          <Middleware.Authenticated render={<About />}/>
        </Navbar>
      </Route>

      <Route path="/contact">
        <Navbar>
          <Middleware.Authenticated render={<Contact />}/>
        </Navbar>
      </Route>

      <Route exact path="/users">
        <Navbar>
          <Middleware.Authenticated render={<Index />}/>
        </Navbar>
      </Route>

      <Route path="/users/:identifier">
        <Navbar>
          <Middleware.Authenticated render={<UsersDetail />}/>
        </Navbar>
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Router;
