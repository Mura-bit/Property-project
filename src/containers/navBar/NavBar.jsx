import React from 'react';
import { Outlet, Link, } from "react-router-dom";
import "./navBar.style.css";
import logoLr from "../../icons/logo.lg.png";
import FetchDog from '../../pages/FetchDog.jsx';

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <img className="nav-logo__img" src={logoLr} alt="#" />
        </div>
        <div path="/" className="nav">
          <nav className="nav__container">
            <ul className="nav__elements">
              <li className="nav__list">
                <Link to="/Counter">Counter</Link>
              </li>
              <li className="nav__list">
                <Link to="/">Checkout Form</Link>
              </li>
              <li className="nav__list">
                <Link to="/FetchDog">Fetch Dog</Link>
              </li>
              <li className="nav__list">
                <Link to="/">Todo App</Link>
              </li>
              <li className="nav__list">
                <Link to="/">Mobile Friendly</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-login">
          <ul className="nav-login__elements">
            <li className="nav-login__list">
              <Link to="/">Sign Up</Link>
            </li>
            <li className="nav-login__list">
              <Link to="/">Sign In</Link>
            </li>
          </ul>
        </div>
          </div>
          <Outlet/>
    </>
  );
}

export default NavBar;