import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

export default function Home({ user }) {
  const [uniqueCompanies, setUniqueCompanies] = React.useState([]);

  React.useEffect(() => {
    getUniqueCompanies();
  }, []);

  const getUniqueCompanies = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/getData/unique-companies"
      );
      setUniqueCompanies(response.data);
    } catch (error) {
      console.error("Error fetching unique companies:", error);
    }
  };

  const logout = () => {
    window.open("http://localhost:4000/auth/logout", "_self");
  };

  let cards = uniqueCompanies.map((company, index) => {
    return (
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
    );
  });

  return (
    <div>
      <Navbar user={user} />
      <div className="homeWrapper">
        {!uniqueCompanies.length ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div>
            <div className="companiesContainer">{cards}</div>
          </div>
        )}
      </div>
    </div>
  );
}
