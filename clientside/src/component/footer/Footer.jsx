import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerRight">
          <h2>Info</h2>
          <p>
            <span>Arohan Vet Pharma</span> is an emerging marketer of animal
            health products and services in Nepal. We have been importing
            veterinary specialities from India and China. We are the sole
            distributor of Alivira Animal Health Pvt. Ltd., Aether Centre
            Biology Co. Ltd., Baader Schulz Laboratories and Veesure Animal
            Health to Nepal. We seeks colaborative partnership with
            international animal health
          </p>
        </div>
        <div className="footerMiddle">
          <iframe
            title="arohanMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.293474329518!2d85.2795183154821!3d27.708223732059345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18863c6acfef%3A0xbe1716e6b39440af!2sArohan%20Vet%20Pharma!5e0!3m2!1sen!2snp!4v1638016299350!5m2!1sen!2snp"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="footerLeft">
          <h2>Contact Info</h2>
          <p>Arohan Vet Pharma</p>
          <p>Sitapaila, Kathmandu -44600, Nepal</p>
          <p>Tel-01-5373436</p>
          <p>Email: arohanvet@gmail.com</p>
          <div className="footerLeftSocials">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>© 2021 Arohan Vet Pharma. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
