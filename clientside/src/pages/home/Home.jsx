import React from "react";
import Footer from "../../component/footer/Footer";
import Slider from "../../component/slider/Slider";
import Header from "../../component/header/Header";
import Introduction from "../../component/introduction/Introduction";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Introduction />
      <Footer />
    </>
  );
};

export default Home;
