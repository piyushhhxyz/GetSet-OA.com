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
          <Link className="listItem" to="/auth">
            Login
          </Link>
        )}
      </div>

      <div className="companiesContainer">
                {uniqueCompanies.map((company, index) => (
                    <Link key={index} to={`/Home/${company._id}`}>
                        <div className="companyBox">
                            <img
                                src={company.companyLogo}
                                alt={`${company._id} Logo`}
                                className="companyLogo"
                            />
                            <div className="companyName">{company._id.toUpperCase()}</div>
                        </div>
                    </Link>
                ))}
            </div>
    </div>
  );
}
