import "./Landing.css";
function Landing() {
  return (
    <div className="wrapper">
      <div className="blackDiv">
        <div className="inline">
          <img className="appLogo" src="appLogo.jpg" />
          <h1 className="name">GetSet</h1>
          <h1 className="nameGr">OA</h1>
        </div>
        <div className="inline top">
          <p className="big">Pooling All </p>
        </div>
        <div className="inline">
          <p className="big ques"> OA Questions</p>
          <p className="small">from</p>
        </div>
        <div className="inline">
          <p className="big tier">TIER-1 Colleges</p>
        </div>
        <div className="inline">
          <p className="small bottom"> across</p>
          <p className="big india">India</p>
        </div>
        <button className="startBtn">Start Solving</button>
      </div>
      <div className="purpleDiv">
        <button className="registerBtn">REGISTER</button>
        <img className="landingImg" src="landingImg-backgroundRemoved.png" />
      </div>
    </div>
  );
}

export default Landing;
