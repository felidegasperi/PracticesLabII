import React from "react";

const BeerStyle = ({ beers }) => {
  const style = [...new Set(beers.map((beer) => beer.beerStyle))];
  return (
    <div>
      {style.map((beer, i) => (
        <li key={i}> {beer}</li>
      ))}
    </div>
  );
};

export default BeerStyle;
