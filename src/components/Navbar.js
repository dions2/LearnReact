import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticated, authUser } from "../store";

function Navbar({ children }) {
  const auth = useRecoilValue(authenticated);
  const { user } = useRecoilValue(authUser);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            MyApp
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* exact untuk mengescape / agar tidak terbaca sehingga navlink status tidak aktif */}

                {auth.check && 
                  <NavLink exact className="nav-link" to="/">
                    Home
                  </NavLink>
                }
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">
                  {user.name}
                </NavLink>
              </li>
            </ul>

            {auth.check ? (
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/login">
                    {auth.user.name}
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <div className="py-4">{children}</div>
    </div>
  );
}

export default Navbar;
