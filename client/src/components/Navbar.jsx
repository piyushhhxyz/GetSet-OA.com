import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar({ user }) {
  const logout = () => {
    window.open("http://localhost:4000/auth/logout", "_self");
  };

  return (
    <div className="inline">
      <img className="appLogoHome" src="assets\appLogo.png" alt="App Logo" />
      <h1 className="name">GetSet</h1>
      <h1 className="nameGr">OA</h1>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={user.photos[0].value} alt="" className="avatar" />
          </li>
          <li className="listItem">{user.displayName}</li>
        </ul>
      ) : (
        <Link className="listItem" to="/auth">
          Login
        </Link>
      )}
    </div>
  );
}
