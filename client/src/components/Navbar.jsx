// import React from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// export default function Navbar({ user }) {
//   const logout = () => {
//     window.open("http://localhost:4000/auth/logout", "_self");
//   };
//   let navigator = useNavigate();

//   return (
//     <div className="inline">
//       <Link to={"/"} className="inline">
//         <img
//           className="appLogoHome"
//           src="https://get-set-oa.vercel.app/wepik-gradient-developers-pink-coding-logo-20230823145648gBI8.png"
//           alt="App Logo"
//         />
//         <h1 className="name">GetSet</h1>
//         <h1 className="nameGr">OA.com</h1>
//       </Link>
//       {user ? (
//         <div className="user-info">
//           <ul className="list">
//             <div className="navlinkDiv">
//               <NavLink to={"/home"} className="navBtn">
//                 OA Question Pool
//               </NavLink>
//               <NavLink to={"/offcampus"} className="navBtn">
//                 Off-Campus Alerts
//               </NavLink>
//               <NavLink to={"/resources"} className="navBtn">
//                 Exclusive Resources
//               </NavLink>
//               <NavLink to={"/interview"} className="navBtn lasst">
//                 Interview Insights
//               </NavLink>
//             </div>
//             <li className="listItem">
//               <img src={user.photos[0].value} alt="" className="avatar" />
//             </li>
//             <li className="listItem">{user.displayName}</li>
//             <li className="listItem">
//               <button onClick={logout} className="logout-button">
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       ) : (
//         <Link className="listItem" to="/auth">
//           Login
//         </Link>
//       )}
//     </div>
//   );
// }


import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar({ user }) {
  const navigate = useNavigate();

  const logout = () => {window.open("http://localhost:4000/auth/logout", "_self")};

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "u" && event.metaKey && event.shiftKey) {
        navigate("/upload");
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  return (
    <div className="inline">
      <Link to={"/"} className="inline">
        <img
          className="appLogoHome"
          src="https://get-set-oa.vercel.app/wepik-gradient-developers-pink-coding-logo-20230823145648gBI8.png"
          alt="App Logo"
        />
        <h1 className="name">GetSet</h1>
        <h1 className="nameGr">OA.com</h1>
      </Link>
      {user ? (
        <div className="user-info">
          <ul className="list">
            <div className="navlinkDiv">
              <NavLink to={"/home"} className="navBtn">
                OA Question Pool
              </NavLink>
              <NavLink to={"/offcampus"} className="navBtn">
                Off-Campus Alerts
              </NavLink>
              <NavLink to={"/resources"} className="navBtn">
                Exclusive Resources
              </NavLink>
              <NavLink to={"/interview"} className="navBtn lasst">
                Interview Insights
              </NavLink>
            </div>
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