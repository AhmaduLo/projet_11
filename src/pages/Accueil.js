import React from "react";
import Navigation from "../components/Navigation";
import Sologant from "../components/sologant";
import Footer from "../components/footer";
const Accueil = (props) => {
  return (
    <div>
      <Navigation />
      <Sologant />
      <h1>acceuil</h1>
      <Footer />
    </div>
  );
};

export default Accueil;
