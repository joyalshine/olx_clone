import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div>
            <span className="heading">POPULAR LOCATIONS</span>
          </div>
          <div className="list">
            <span className="footerText">Kolkata</span>
            <br />
            <span className="footerText">Mumbai</span>
            <br />
            <span className="footerText">Chennai</span>
            <br />
            <span className="footerText">Pune</span>
            <br />
          </div>
        </div>
        <div>
          <div>
            <span className="heading">ABOUT US</span>
          </div>
          <div className="list">
            <span className="footerText">Bhubaneshwar</span>
            <br />
            <span className="footerText">Hyderabad</span>
            <br />
            <span className="footerText">Chandigarh</span>
            <br />
            <span className="footerText">Nashik</span>
            <br />
          </div>
        </div>
        <div>
          <div>
            <span className="heading">ABOUT US</span>
          </div>
          <div className="list">
            <span className="footerText">About OLX Group</span>
            <br />
            <span className="footerText">Careers</span>
            <br />
            <span className="footerText">Contact Us</span>
            <br />
            <span className="footerText">OLXPeople</span>
            <br />
            <span className="footerText">Waah Jobs</span>
            <br />
          </div>
        </div>
        <div>
          <div>
            <span className="heading">OLX</span>
          </div>
          <div className="list">
            <span className="footerText">Help</span>
            <br />
            <span className="footerText">Sitemap</span>
            <br />
            <span className="footerText">Legal & Privacy information</span>
            <br />
            <span className="footerText">Blog</span>
            <br />
            <span className="footerText">OLX Autos Sell Car</span>
            <br />
            <span className="footerText">Vulnerability Disclosure Program</span>
            <br />
          </div>
        </div>
        <div style={{ marginRight: "70px", display: "grid" }}>
          <div>
            <span className="heading">FOLLOW US</span>
            <br />
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-youtube"></i>
          </div>
          <div>
            <img
              src="https://statics.olx.in/external/base/img/playstore.webp"
              alt=""
            />
            <img
              src="https://statics.olx.in/external/base/img/appstore.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <p style={{ fontSize: "11px" }}>
          Other Countries Pakistan - South Africa - Indonesia
        </p>
        <p style={{ fontSize: "11px", marginRight: "20px" }}>
          Free Classifieds in India. © 2006-2021 OLX
        </p>
      </div>
    </div>
  );
}

export default Footer;
