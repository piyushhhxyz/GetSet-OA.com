import "./Auth.css";
import GithubButton from "react-github-login-button";
function Auth() {
  return (
    <div className="wrapper">
      <div className="loginDiv">
        <div className="googleBtn">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
          <button className="btnItself">Sign in with Google</button>
        </div>
        <div>
          <GithubButton
            className="gitBtn"
            type="dark"
            onClick={() => {
              console.log("Github button clicked");
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default Auth;
