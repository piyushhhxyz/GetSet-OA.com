import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



export default function Home({ user }) {
  const [uniqueCompanies, setUniqueCompanies] = React.useState([]);
  
  React.useEffect(() => {
    getUniqueCompanies();
  }, []);

  const getUniqueCompanies = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/getData/unique-companies');
      setUniqueCompanies(response.data);
    } catch (error) {
      console.error('Error fetching unique companies:', error);
    }
  };

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
          </ul>
        ) : (
          <Link className="link" to="login">
            Login
          </Link>
        )}
      </div>

      <div className="companiesContainer">
        {uniqueCompanies.map((companyName, index) => (
          <div key={index} className="companyBox">
            {companyName.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}
