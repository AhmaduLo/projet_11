import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ServiceAbout = (props) => {
  // État local pour gérer l'ouverture/fermeture du contenu
  const [contentStates, setContentStates] = useState([
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
  ]);
  // Fonction pour basculer l'état de l'ouverture/fermeture du contenu
  const toggleContent = (index) => {
    setContentStates((prevStates) =>
      prevStates.map((state, i) =>
        i === index ? { isOpen: !state.isOpen } : state
      )
    );
  };
  return (
    <section>
      <header>
        <div className="sologant">
          <div className="overlay-noir"></div>
          <img src="./imgabout.png" alt="logo" />
        </div>
      </header>
      <div className="qualiteloc">
        {/* //-------Fiabilite---------- */}
        <div className="container">
          <div className="serviceName">
            <p>Fiabilite</p>
            <FontAwesomeIcon
              className={`fontChevron ${contentStates[0].isOpen ? "open" : ""}`}
              icon={faChevronUp}
              onClick={() => toggleContent(0)}
            />
          </div>
          <div
            className={`container_test ${
              contentStates[0].isOpen ? "deroulement" : ""
            }`}
          >
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
        {/* //-------Respect---------- */}
        <div className="container">
          <div className="serviceName">
            <p>Respect</p>
            <FontAwesomeIcon
              className={`fontChevron ${contentStates[1].isOpen ? "open" : ""}`}
              icon={faChevronUp}
              onClick={() => toggleContent(1)}
            />
          </div>
          <div
            className={`container_test ${
              contentStates[1].isOpen ? "deroulement" : ""
            }`}
          >
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
        {/* //-------Service---------- */}
        <div className="container">
          <div className="serviceName">
            <p>Service</p>
            <FontAwesomeIcon
              className={`fontChevron ${contentStates[2].isOpen ? "open" : ""}`}
              icon={faChevronUp}
              onClick={() => toggleContent(2)}
            />
          </div>
          <div
            className={`container_test ${
              contentStates[2].isOpen ? "deroulement" : ""
            }`}
          >
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
        {/* //-------Securite---------- */}
        <div className="container">
          <div className="serviceName">
            <p>Securite</p>
            <FontAwesomeIcon
              className={`fontChevron ${contentStates[3].isOpen ? "open" : ""}`}
              icon={faChevronUp}
              onClick={() => toggleContent(3)}
            />
          </div>
          <div
            className={`container_test ${
              contentStates[3].isOpen ? "deroulement" : ""
            }`}
          >
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAbout;
