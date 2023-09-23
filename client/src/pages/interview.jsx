import React from "react";
import Navbar from "../components/Navbar";

export default function Interview({ user }) {
  return (
    <div>
      <Navbar user={user}></Navbar>
      <div className="hold">
        <h1 className="waitgr">
          Keep Showering Us With Your Love And Support xoxo
        </h1>
      </div>
      <div className="comingSoon">
        <h1 className="waitgr">...Coming Soon</h1>
      </div>
    </div>
  );
}
