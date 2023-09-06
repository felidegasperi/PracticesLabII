import "./BeerItem.css";
import React from "react";

const BeerItem = ({ id, beerName, beerStyle, price, available }) => {
  return (
    <div className="beer-item-container">
      <h2>BeerName: {beerName}</h2>
      <h2>BeerStyle: {beerStyle}</h2>
      <h2>Price: {price}</h2>
      <h2>
        Available: {available ? "Si hay disponibles" : "No hay disponibles"}
      </h2>
      <br></br>
    </div>
  );
};

export default BeerItem;
