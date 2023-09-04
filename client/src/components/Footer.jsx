import React from "react";

function Footer() {
  return (
    <footer className="footer">
         <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 GetSet OA.com™</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <a href="#">Privacy Policy</a> | <a href="#">Disclaimer</a> | <a href="#">Copyright</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
