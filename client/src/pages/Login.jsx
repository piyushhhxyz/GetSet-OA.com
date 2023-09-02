/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Login() {
  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:4000/auth/github", "_self");
  };

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
            <button className="googleBtn" onClick={google}>
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />{" "}
              <p className="google-btn-text">Login with Google</p>
            </button>
            <button className="gitBtn" onClick={github}>
              <img className="github-icon" src="assets\githubLoginImage.png" />
              <p className="git-btn-text">Login with Github</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
