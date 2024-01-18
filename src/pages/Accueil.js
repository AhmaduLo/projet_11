import React from "react";
import Navigation from "../components/Navigation";
import Sologant from "../components/sologant";
import Footer from "../components/footer";
import CardAccueil from "../components/CardAccueil";
const Accueil = (props) => {
  return (
    <div>
      <Navigation />
      <Sologant />
      <CardAccueil/>
      <Footer />
    </div>
  );
};

export default Accueil;
