import React from "react";
import Navbar from "../components/Navbar";

export default function Sources({ user }) {
  return (
    <div>
      <Navbar user={user} />
      <div className="resourcesWrapper">
        <div className="hold">
          <h1 className="waitgr">Hold your FUCKINGGGG Horses xoxo</h1>
        </div>
        <div className="comingSoon">
          <h1 className="waitgr">...Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}
