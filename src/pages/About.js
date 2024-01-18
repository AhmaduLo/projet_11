import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const About = (props) => {


  return (
    <div>
      <Navigation />
      <section>
        <header>
          <div className="sologant">
            <div className="overlay-noir"></div>
            <img src="./imgabout.png" alt="logo" />
          </div>
        </header>

        <div className="qualiteloc">
          <div className="serviceName">
            <p>Fiabilite</p>{" "}
            <FontAwesomeIcon
              className="fontChevron"
              icon={faChevronUp}
              onClick={this.handleClick}
            />
          </div>
          {/* <div className="serviceName">Respect</div>
          <div className="serviceName">Service</div>
          <div className="serviceName">Securite</div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
