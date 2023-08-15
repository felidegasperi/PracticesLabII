// Dado un arreglo de objetos de países que poseen dos propiedades: name y
// population, ordenarlos de mayor a menor en cuanto a su población utilizando la
// función de arreglo sort().

let cities = [
  { name: "Argentina", population: 50000000 },
  { name: "Brazil", population: 120000000 },
  { name: "Chile", population: 20000000 },
  { name: "Colombia", population: 12000000 },
  { name: "Peru", population: 8000000 },
];

const orderCountry = (country) => {
  return country.sort((a, b) => b.population - a.population);
};

console.log(orderCountry(cities));
