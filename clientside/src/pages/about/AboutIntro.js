import React from "react";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import "./aboutIntro.css";

const AboutIntro = () => {
  return (
    <div>
      <Header />
      <div className="aboutIntro">
        <h2>Introduction</h2>
        <p>
          Arohan Vet Pharma, established on 2002 AD, is an emerging veterinary
          super distributor company of Nepal. We had started our business
          through distributing veterinary drugs ofnational and international
          veterinary pharmaceutical companies throughout the country. And now,
          we are the sole distributor of Alivira Animal Health Pvt. Ltd., Aether
          Centre Biology Co. Ltd., Baader Schulz Laboratories and Veesure Animal
          Health to Nepal.
          <br />
          <br />
          Being a company solely dedicated to well-being of livestock farmers,
          Arohan Vet Pharma aims to enhance farmer’s gain, ensure growth and
          healthy lives of animals by supplying wide range of quality veterinary
          drugs and feed supplements.
          <br />
          <br />
          Moreover, we also distribute veterinary drugs of well-known national
          and international veterinary pharmaceutical companies. Also, we have
          our own veterinary clinic in the Kathmandu Valley.
        </p>
        <div className="moreInfo">
          <p>
            <u>
              <b>Turn over</b>
            </u>
            : <span style={{ color: "#4BB543" }}>8 crore</span>
          </p>
          <p>
            <u>
              <b>No. of Employee</b>
            </u>
            : <span style={{ color: "#FFA500" }}>15</span>
          </p>
          <p>
            <u>
              <b>No. of Headquarter</b>
            </u>
            : <span style={{ color: "#FF7F7F " }}>8</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutIntro;
