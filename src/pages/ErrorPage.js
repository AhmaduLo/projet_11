import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";
const ErrorPage = (props) => {
  return (
    <div>
      <Navigation />
      <div className="errorpage">
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <NavLink to="/" className="backLink">
          <p>Retourner sur la page d’accueil</p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
