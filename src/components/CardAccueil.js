import React from "react";
import jsonData from "../assets/jsonData.json";
import { useEffect, useState } from "react";

const CardAccueil = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Utilisez les données importées ici
    setData(jsonData);
  }, []);

  return (
    <nav className="carsaccueil">
      <div className="container_All_Card">
        {data.map((item) => (
          <div key={item.id} className="card">
            <div className="card_img">
              <img src={item.cover} alt={item.title} />
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
