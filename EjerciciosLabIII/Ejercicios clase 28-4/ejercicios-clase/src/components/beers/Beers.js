import React from "react";
import BeerItem from "../beerItem/BeerItem";
import BeerStyles from "../beerCount/BeerCount";
import BeerStyle from "../beerStyle/BeerStyle";

import "./Beers.css";

const Beers = () => {
  const beers = [
    {
      id: 1,
      beerName: "American",
      beerStyle: "IPA",
      price: 3,
      available: true,
    },
    {
      id: 2,
      beerName: "Argenta",
      beerStyle: "IPA",
      price: 4,
      available: false,
    },
    {
      id: 3,
      beerName: "Irish",
      beerStyle: "Red",
      price: 4,
      available: true,
    },
    {
      id: 4,
      beerName: "Scotish",
      beerStyle: "Red",
      price: 3,
      available: true,
    },
    {
      id: 5,
      beerName: "DeEssoCiTratta",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 6,
      beerName: "Santa APA",
      beerStyle: "APA",
      price: 3,
      available: true,
    },
    {
      id: 7,
      beerName: "German",
      beerStyle: "Pilsen",
      price: 1,
      available: true,
    },
    {
      id: 8,
      beerName: "London Porter",
      beerStyle: "Porter",
      price: 2,
      available: false,
    },
    {
      id: 9,
      beerName: "Scotish ALE",
      beerStyle: "Red",
      price: 5,
      available: false,
    },
  ];

  const dolar = 730;
  return (
    <>
      <h1>Ejercicio 1</h1>
      <hr />
      <div className="beers">
        {beers.map((beer) => (
          <BeerItem
            id={beer.id}
            beerName={beer.beerName}
            beerStyle={beer.beerStyle}
            price={beer.price * dolar}
            available={beer.available}
          />
        ))}
      </div>

      <h1>Ejercicio 2</h1>
      <hr />
      <div className="beers">
        {beers
          .filter((beer) => beer.available != false)
          .map((beer) => (
            <BeerItem
              id={beer.id}
              beerName={beer.beerName}
              beerStyle={beer.beerStyle}
              price={beer.price * dolar}
              available={beer.available}
            />
          ))}
      </div>

      <h1>Ejercicio 3</h1>
      <hr />
      <BeerStyles beers={beers} />

      <h1>Ejercicio 4</h1>
      <hr />

      <BeerStyle beers={beers} />
    </>
  );
};

export default Beers;
