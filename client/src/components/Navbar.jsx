import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar({ user }) {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img
            className="appLogoHome"
            src="wepik-gradient-developers-pink-coding-logo-20230823145648gBI8.png"
            alt="App Logo"
          />
          <h1 className="name">GetSet</h1>
          <h1 className="nameGr">OA</h1>
        </div>
      </div>
      <div className="navbar-right">
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">{user.displayName}</li>
          {/* <li className="listItem" onClick={logout}>
            Logout
          </li> */}
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
      </div>
    </div>
  );
}
