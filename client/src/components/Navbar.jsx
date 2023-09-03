import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user }) {
  const logout = () => {
    window.open("http://localhost:4000/auth/logout", "_self");
  };

  return (
    <div className="inline">
      <img
        className="appLogoHome"
        src="https://get-set-oa.vercel.app/wepik-gradient-developers-pink-coding-logo-20230823145648gBI8.png"
        alt="App Logo"
      />
      <h1 className="name">GetSet</h1>
      <h1 className="nameGr">OA.com</h1>
      {user ? (
        <div className="user-info">
          <ul className="list">
            <li className="listItem">
              <img src={user.photos[0].value} alt="" className="avatar" />
            </li>
            <li className="listItem">{user.displayName}</li>
            <li className="listItem">
              <button onClick={logout} className="logout-button">
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link className="listItem" to="/auth">
          Login
        </Link>
      )}
    </div>
  );
}
