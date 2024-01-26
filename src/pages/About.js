import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import ServiceAbout from "../components/ServiceAbout";

const About = (props) => {
 
 
  return (
    <div className="about">
      <Navigation />
      <ServiceAbout/>
      <Footer />
    </div>
  );
};

export default About;
