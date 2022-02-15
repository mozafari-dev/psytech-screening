import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.svg";


const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-fixed-top navbar-light bg-light main-nav">
      <div className="container" style={{ fontFamily: 'IranSans' }}>
        <ul className="nav navbar-nav justify-content-center">
        </ul>

        <ul className="nav navbar-nav mx-auto">
          <li className="nav-item m-4">
            <NavLink className="nav-item nav-link" to="/home">
              صفحه اصلی
            </NavLink>
          </li>
          <li className="nav-item m-4">
            <NavLink className="nav-item nav-link" to="/payesh">
              تست های غربالگری
            </NavLink>
          </li>
          <li className="nav-item">
            <Link className="navbar-brand" to="/home">
              <img src={Logo}></img>
            </Link>
          </li>
          <li className="nav-item m-4">
            <NavLink className="nav-item nav-link" to="/blogs">
              وبلاگ و مقالات
            </NavLink>
          </li>
          <li className="nav-item m-4">
            <NavLink className="nav-item nav-link" to="/about-us">
              درباره ما
            </NavLink>
          </li>
        </ul>
        {!user && (
          <ul className="nav navbar-nav justify-content-end">
            <li className="nav-item">
              <NavLink className="btn btn-outline-danger" to="/login">
                ورود به سامانه
              </NavLink>
            </li>
          </ul>
        )}
        {user && (
          <ul className="nav navbar-nav justify-content-end">
            <li className="nav-item">

              <NavLink className="nav-item nav-link" to="/profile">
                {user.name}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-item nav-link" to="/logout" role="button">
                خروج
              </NavLink>
            </li>

          </ul>
        )}
      </div>
    </nav>

  );
};

export default NavBar;
