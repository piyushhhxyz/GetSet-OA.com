import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



export default function CompanyDetails() {
    const { companyName } = useParams();
    const [companyDetails, setCompanyDetails] = useState([]);
    const [activeBox, setActiveBox] = useState(null);

    useEffect(() => {
        fetchCompanyDetails();
    }, [companyName]);

    const fetchCompanyDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/getData/${companyName}`);
            console.log(response)
            setCompanyDetails(response.data);
        } catch (error) {
            console.error('Error fetching company details:', error);
        }
    };

    const toggleDriveLink = (index) => {
        if (activeBox === index) {
            setActiveBox(null);
        } else {
            setActiveBox(index);
        }
    };

    const openDriveLink = (driveLink) => {
        window.open(driveLink, '_blank');
    };

    return (
        <div className="company-details-container">
            <h1 className="company-name-heading">Company: {companyName}</h1>

            <div className="details-boxes">
                {companyDetails.map((details, index) => (
                    <div
                        key={index}
                        className={`details-box ${activeBox === index ? 'active' : ''}`}
                        onClick={() => {
                            toggleDriveLink(index);
                            openDriveLink(details.driveLink);
                        }}
                    >
                        <h2 className="college-name">{details.collegeName}</h2>
                        <p className="info">Date: {details.date}</p>
                        <p className="info">Duration: {details.intern_or_FullTime.toUpperCase()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
