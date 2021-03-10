import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-0">
  <div className="container-fluid px-0">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse col-12" id="navbarNav">
      <ul className="navbar-nav d-flex justify-content-between m-auto p-0 col-8">
        <li className="nav-item">
          <NavLink className="nav-link pl-0 text-info" exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-info" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-info pr-0" to="/Contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
