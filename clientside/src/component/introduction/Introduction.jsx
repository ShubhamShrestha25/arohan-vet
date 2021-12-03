import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introductionContainer">
      <div className="introduction">
        <h2>Introduction</h2>
        <p>
          <span>Arohan Vet Pharma </span> is an emerging marketer of animal
          health products and services in Nepal. We have been importing
          veterinary specialities from India and China. We are the sole
          distributor of Alivira Animal Health Pvt. Ltd., Aether Centre Biology
          Co. Ltd., Baader Schulz Laboratories and Veesure Animal Health to
          Nepal. We seeks colaborative partnership with international animal
          health companies, having unique and quality products & services.
        </p>
      </div>
      <div className="productContainer">
        <h2>Products</h2>
        <div className="allProducts">
          <div className="singleProduct">
            <h3>Alivira Animal Health</h3>
            <img src="./images/alivira.png" alt="Not Found" />
            <p>
              Alivira is India’s largest and 1st global animal health company
              offering APIs and formulations. We have state-of-the-art
              manufacturing facilities in 5 countries including India’s only
              USFDA approved Active Pharmaceutical Ingredients (API) facility,
              marketing presence in more than 100 countries and employing 1000+
              people. The API business is characterised by long established
              relationships with Global Top 10 Animal Health companies.
            </p>
          </div>

          <div className="singleProduct">
            <h3>Veesure Animal Health</h3>
            <img src="./images/vessure.png" alt="Not Found" />
            <p>
              Veesure Animal Health is a leading player in Veterinary
              Pharmaceuticals & Animal Health Industry. We have a dedicated team
              of professionals working with us at our manufacturing and
              corporate base in Ahmedabad, India. Our commitment to quality,
              integrity and animal ethics is unparalleled in the industry.
              Globally we have presence in countries of Middle East, Africa &
              South-EastAsia.
            </p>
          </div>

          <div className="singleProduct">
            <h3>Baader Schulz Laboratories</h3>
            <img src="./images/baader.png" alt="Not Found" />
            <p>
              BAADER SCHULZ LABORATORIES is a total veterinary feed supplements
              formulating unit started by young dynamic business entrepreneurs
              having more than 20 years experience in this field. After
              achieving great success in veterinary field, both in the domestic
              and export markets, the company has further set up a new Plant in
              2003 - 2004 with consideration of WHO-GMP norms under banner of
              Baader Schulz Laboratories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
