import "./BeerItem.css";
import React from "react";

const BeerItem = ({ id, beerName, beerStyle, price, available }) => {
  return (
    <div className="beer-item-container">
      <h2>Nombre: {beerName}</h2>
      <h2>Estilo: {beerStyle}</h2>
      <h2>Precio: {price}</h2>
      <h2>
        Disponibilidad: {available ? "Hay disponibles" : "No hay disponibles"}
      </h2>
      <br></br>
    </div>
  );
};

export default BeerItem;
