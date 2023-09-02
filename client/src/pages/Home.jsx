import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

export default function Home({ user }) {
  const [isLoading, setLoading] = React.useState(false);
  const [uniqueCompanies, setUniqueCompanies] = React.useState([]);

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

  React.useEffect(() => {
    getUniqueCompanies();
  }, []);

  const getUniqueCompanies = async () => {
    setTimeout(() => {
      setLoading(true);
    }, 800);
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/getData/unique-companies"
      );
      setUniqueCompanies(response.data);
    } catch (error) {
      console.error("Error fetching unique companies:", error);
    }
  };

  return (
    <div className="homeWrapper">
      {isLoading ? (
        <div>
          <Navbar user={user}></Navbar>
          <div className="companiesContainer">{cards}</div>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
}
