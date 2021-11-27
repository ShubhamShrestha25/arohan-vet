import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img src="./images/arohan.png" alt="Arohan" />
      </div>
      <div className="right">
        <ul>
          <li> Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Gallery</li>
          <li>News & notice</li>
          <li>Related Links</li>
          <li>Contact & Feedback</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
