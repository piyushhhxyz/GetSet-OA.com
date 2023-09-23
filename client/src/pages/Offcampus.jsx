import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Offloader from "../components/Offloader";
export default function Offcampus({ user }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [offCampData, setOffCampData] = useState([
    {
      company: "BNY Mellon",
      imgurl: "assets/BNY office.jpeg",
      url: "www.bnymellon.com/us/en/careers/students/internship-program.html",
      Eligibility: "2024",
      location: "California",
      stipend: "Rs 75,000/-pm",
      role: "SWE Intern",
      note: "Only Females Candidates",
    },
    {
      company: "Deutsche Bank",
      imgurl:
        "https://www.privatebankerinternational.com/wp-content/uploads/sites/5/2020/09/DeutscheBank.jpg",
      url: "netflix.com",
      Eligibility: "2024",
      location: "California",
      stipend: "Rs 75,000/-pm",
      role: "SWE Intern",
      note: "Only Females Candidates",
    },
    {
      company: "Netflix",
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRry-jqpffMP5nxpDgEFrObcEgwMI8TvElV7DuTTkVrA&s",
      url: "jobs.netflix.com/jobs/292210010",
      Eligibility: "2024",
      location: "California",
      stipend: "Rs 75,000/-pm",
      role: "SWE Intern",
      note: "Only Females Candidates",
    },
    {
      company: "Morgan Stanley",
      imgurl:
        "https://www.goodreturns.in/img/2023/05/morgan-stanley-1685522925.jpg",
      url: "careers.jpmorgan.com/in/en/students/programs?deeplink=multiTabNav1::tab3",
      Eligibility: "2024",
      location: "California",
      stipend: "Rs 75,000/-pm",
      role: "SWE Intern",
      note: "Only Females Candidates",
    },
    {
      company: "Sprinklr",
      imgurl:
        "https://pbs.twimg.com/media/E4l6EA0X0AYeU-w?format=jpg&name=4096x4096",
      url: "netflix.com",
      Eligibility: "2024",
      location: "California",
      stipend: "Rs 75,000/-pm",
      role: "SWE Intern",
      note: "Only Females Candidates",
    },
    {
      company: "Oracle",
      imgurl:
        "https://rest.techbehemoths.com/storage/images/posts/main/main-oracle-offices-62eb6dba8e2d9.png",
      url: "netflix.com",
      Eligibility: "2024",
      location: "California",
      stipend: "Rs 75,000/-pm",
      role: "SWE Intern",
      note: "Only Females Candidates",
    },
    {
      company: "Microsoft",
      imgurl:
        "https://media.istockphoto.com/id/1354846583/photo/microsoft-france-headquarters-entrance-in-issy-les-moulineaux-near-paris.jpg?s=612x612&w=0&k=20&c=qp3gYZx05398hv3BLzBIMRhm8MoxLzPxs6V7Xr2oIeE=",
      url: "jobs.careers.microsoft.com/global/en/search?lc=India&l=en_us&pg=1&pgSz=20&o=Relevance&flt=true",
      Eligibility: "2024",
      location: "California",
      stipend: "Rs 75,000/-pm",
      role: "SWE Intern",
      note: "Only Females Candidates",
    },
    {
      company: "Atlassion",
      imgurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWAz2ROOhfdYFsCIk6_xGwzPqiIO7q41SCyP-FkXdNzJyQlY6YnpGN9dCQ2yBuyUwQ1Z0&usqp=CAU",
      url: "www.atlassian.com/company/careers/all-jobs?team=Engineering&location=India&search=",
      Eligibility: "2024",
      location: "California",
      stipend: "Rs 75,000/-pm",
      role: "SWE Intern",
      note: "Only Females Candidates",
    },
    {
      company: "Google",
      imgurl:
        "https://t3.ftcdn.net/jpg/05/05/94/08/360_F_505940885_kmTN2GvEUmdY0uylOR5bAaEgTRVXUndm.jpg",
      url: "www.google.com/about/careers/applications/jobs/results/?q=Software%20Engineer",
      Eligibility: "2024",
      location: "California",
      stipend: "Rs 75,000/-pm",
      role: "SWE Intern",
      note: "Only Females Candidates",
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  }, []);

  let offCampComp = offCampData.map((data) => {
    return (
      <a href={`https://${data.url}`}>
        <div className="offcampusCardWrapper">
          <img src={data.imgurl} alt="idk" className="cardImg"></img>
          <div className="offcampusDataDiv">
            <h3 className="offcampusName">Company Name : {data.company}</h3>
            <h3 className="role">Role : {data.role}</h3>
            <h3 className="roleName">Eligible Batch : {data.Eligibility}</h3>
          </div>
        </div>
      </a>
    );
  });

  return (
    <div>
      <Navbar user={user} />
      <div className="offcampusWrapper">
        {isLoading ? <Offloader></Offloader> : offCampComp}
      </div>
    </div>
  );
}
