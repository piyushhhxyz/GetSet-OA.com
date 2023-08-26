import React from "react";

export default function Login() {
  return (
    <div className="loginTop">
      <div className="inline">
        <img
          className="appLogoLogin"
          src="wepik-gradient-developers-pink-coding-logo-20230823145648gBI8.png"
        />
        <h1 className="name">GetSet</h1>
        <h1 className="nameGr">OA</h1>
      </div>
      <div className="loginWrapper">
        <div className="container">
          <img src="loginbg-removebg-preview.png" className="loginImg"></img>
          <div className="btnDiv">
            <button className="googleBtn">Login with Google</button>
            <button className="gitBtn"> Login with Github</button>
          </div>
        </div>
      </div>
    </div>
  );
}
