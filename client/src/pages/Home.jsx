import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Home({ user }) {
  const logout = () => {
    window.open("http://localhost:4000/auth/logout", "_self");
  };
  const userDetails = () => {
    console.log(user)
  }
  userDetails()
  return (
    <div className="homeWrapper">
      <div className="inline">
        <img
          className="appLogoHome"
          src="wepik-gradient-developers-pink-coding-logo-20230823145648gBI8.png"
          alt="App Logo"
        />
        <h1 className="name">GetSet</h1>
        <h1 className="nameGr">OA</h1>
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
    // <div>
    //   <Navbar user={user}/>
    //   <h1>HOME PAGE</h1>
    // </div>
  );
}
