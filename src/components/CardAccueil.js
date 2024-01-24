import React from "react";
import jsonData from "../assets/jsonData.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CardAccueil = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Utilisez les données importées ici
    setData(jsonData);
  }, []);

  const handleImageClick = (id) => {
    // Redirige vers la page infoLoc avec l'id dans l'URL
    navigate(`/infoLoc/${id}`);
  };

  return (
    <nav className="carsaccueil">
      <div className="container_All_Card">
        {data.map((item) => (
          <div key={item.id} className="card">
            <div className="card_img">
              <img
                src={item.cover}
                alt={item.title}
                onClick={() => handleImageClick(item.id)}
              />
              <span></span>
            </div>
            <div className="title">
              {" "}
              <h3> {item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default CardAccueil;
