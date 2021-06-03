import React from "react";
import { NavLink } from "react-router-dom";

function Login(props) {
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
          <div class="col-md-4">
              <div class="text-center">
                  Go To <NavLink to="/">Home</NavLink>
              </div>
            <div class="card">
              <div class="card-header">Login</div>
              <div class="card-body">
                  <form action="">
                      <div class="mb-4">
                          <label for="email">Email</label>
                          <input type="text" name="email" id="email" class="form-control"/>
                      </div>
                      <div class="mb-4">
                          <label for="password">Password</label>
                          <input type="text" name="password" id="password" class="form-control"/>
                      </div>
                      <button type="submit" class="btn btn-block btn-primary">Button</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
