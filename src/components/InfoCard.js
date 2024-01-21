import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import jsonData from "../assets/jsonData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const InfoCard = (props) => {
  const { id } = useParams();
  //--------------pour les likes------------
  const [like, setLike] = useState([
    { isLIke: false },
    { isLIke: false },
    { isLIke: false },
    { isLIke: false },
    { isLIke: false },
  ]);
  const liker = (index) => {
    setLike((prevStates) =>
      prevStates.map((state, i) =>
        i === index ? { isLIke: !state.isLIke } : state
      )
    );
  };

  //-----------function pour les description---------------
  const [contentStates, setContentStates] = useState([
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
  // Find the data for the specific ID
  const selectedItem = jsonData.find((item) => item.id === id);

  if (!selectedItem) {
    // Handle the case where the item with the specified ID is not found
    console.log("noooo");
  }
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const handleChevronClick = (direction) => {
    if (direction === "left") {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === 0 ? selectedItem.pictures.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === selectedItem.pictures.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  //------verifier s'il ya beaucoup de picture------------
  const showChevrons = selectedItem.pictures.length > 1;
  return (
    <div className="container_all_info">
      <div className="images">
        {showChevrons && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="chevronLeft"
            onClick={() => handleChevronClick("left")}
          />
        )}
        <img
          src={
            currentPhotoIndex === null
              ? selectedItem.cover
              : selectedItem.pictures[currentPhotoIndex]
          }
          alt="logo"
        />
        {showChevrons && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className="chevronRight"
            onClick={() => handleChevronClick("right")}
          />
        )}
      </div>

      {/* ------------------------------------- */}
      <div className="cont_profil_tittle">
        <div className="tittle_localisation">
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.location}</p>
          <div className="trois_border">
            {selectedItem.tags.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="profil_note">
          <div className="nom_photo">
            <p>{selectedItem.host.name}</p>
            <div className="img_profil">
              <img src={selectedItem.host.picture} alt="" />
            </div>
          </div>
          <div className="etoile">
            <FontAwesomeIcon
              icon={faStar}
              className={`etoileIcone ${like[0].isLIke ? "like" : ""}`}
              onClick={() => liker(0)}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`etoileIcone ${like[1].isLIke ? "like" : ""}`}
              onClick={() => liker(1)}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`etoileIcone ${like[2].isLIke ? "like" : ""}`}
              onClick={() => liker(2)}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`etoileIcone ${like[3].isLIke ? "like" : ""}`}
              onClick={() => liker(3)}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`etoileIcone ${like[4].isLIke ? "like" : ""}`}
              onClick={() => liker(4)}
            />
          </div>
        </div>
      </div>

      <div className="description">
        <div className="container">
          <div className="serviceName">
            <p>Description</p>
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
            <p>{selectedItem.description}</p>
          </div>
        </div>

        <div className="container">
          <div className="serviceName">
            <p>Equipement</p>
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
            {selectedItem.equipments.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
