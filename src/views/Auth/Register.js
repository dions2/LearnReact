import React from 'react';
import { NavLink } from 'react-router-dom';

function Register(props) {
    return (
        <div>
            <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-4">
              <div className="text-center">
                  Go To <NavLink to="/login">Login Page</NavLink>
              </div>
            <div className="card">
              <div className="card-header text-dark">REGISTER</div>
              <div className="card-body">
                  <form action="">
                      <div className="mb-4 text-dark">
                          <label htmlFor="email">Email</label>
                          <input type="text" name="email" id="email" className="form-control"/>
                      </div>
                      <div className="mb-4 text-dark">
                          <label htmlFor="password">Password</label>
                          <input type="text" name="password" id="password" className="form-control"/>
                      </div>
                      <button type="submit" className="btn btn-block btn-primary">Button</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Register;