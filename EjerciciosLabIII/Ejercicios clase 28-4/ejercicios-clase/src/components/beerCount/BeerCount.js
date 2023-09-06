import React from "react";

const BeerStyles = ({ beers }) => {
  const countRed = beers.filter((beer) => beer.beerStyle === "IPA").length;
  const countIPA = beers.filter((beer) => beer.beerStyle === "Red").length;
  console.log(countIPA);
  return (
    <div>
      <p>la cantidad de cervezas IPA son: {countIPA}</p>
      <p>la cantidad de cervezas Red son: {countRed}</p>
    </div>
  );
};

export default BeerStyles;
