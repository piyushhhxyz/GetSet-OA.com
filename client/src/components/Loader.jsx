import React from "react";
import "./Loader.css";
export default function () {
  return (
    <div className="loaderWrapper">
      <div class="notBody">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class="base"></div>

        <div class="face"></div>
      </div>

      <div class="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h1 className="loaderMessage">Getting Latest Oa ques for you</h1>
    </div>
  );
}
