import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Upload({ user }) {
  const myComponentStyle = {
    background: "transparent",
    border: "none",
  };

  let navigator = useNavigate();

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      (loginCredentials.username === "PARV SEHGAL" ||
        loginCredentials.username === "PARV") &&
      loginCredentials.password === "12345678"
    ) {
      setIsAuthenticated(true);
      alert("Welcome TO Uploading");
    } else {
      alert("YOU ARE NOT AUTHORIZED TO ENTER THIS PAGE<>");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="upload-form-container">
        <h2 className="authMessage">Just Say Hello !!!</h2>
        <p className="authM">Join our team as a collaborator !!!</p>
        <form className="upload_auth-form">
          <div className="authFlex">
            <div className="user">
              <input
                className="usernameInput"
                type="text"
                name="username"
                placeholder="USERNAME"
                value={loginCredentials.username}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredentials,
                    username: e.target.value,
                  })
                }
              />
            </div>
            <div className="password">
              <input
                className="passInput"
                style={myComponentStyle}
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={loginCredentials.password}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredentials,
                    password: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <button onClick={handleLogin} className="btn auth">
            AUTHENTICATE
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="uploadOptions">
      <div className="optionsWrapper">
        <div className="OAcontainer">
          <div
            className="OAupload"
            onClick={() => {
              navigator("/upload/OA");
            }}
          >
            <img
              className="uploadGif"
              src="https://i.pinimg.com/originals/9e/6a/03/9e6a03296e60add71104e77575babb31.gif"
            />
            <h2 className="cardTitle">ONLINE ASSESSMENT</h2>
          </div>
        </div>
        <div>
          <div className="offCampus-Resources-container">
            <div
              className="offUpload"
              onClick={() => {
                navigator("/upload/offcampus");
              }}
            >
              <img
                className="uploadGif"
                src="https://i.pinimg.com/originals/ac/6d/c4/ac6dc4fe1925ca65a92fb0bc88cfe6ba.gif"
              />
              <h3 className="cardTitleoff">OFFCAMPUS ALERTS</h3>
            </div>
            <div
              className="resUpload"
              onClick={() => {
                navigator("/upload/resources");
              }}
            >
              <img className="uploadGif" src="https://i.gifer.com/TvTG.gif" />
              <h3 className="cardTitleres">TECH RESOURCES </h3>
            </div>
          </div>
          <div className="signUpload">
            <p className="signup">UPLOAD NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
}
