// Crear un arreglo de nombres a partir del arreglo anterior pero solo para las
// personas mayores de 20 años y menores de 29.

let input = [
  { name: "John", age: 21, city: "New York" },
  { name: "Mike", age: 28, city: "Moscow" },
  { name: "Danny", age: 30, city: "London" },
  { name: "Lisa", age: 26, city: "Paris" },
  { name: "Sophie", age: 19, city: "Berlin" },
];

const returnTheNames = (inputValue) => {
  return inputValue
    .filter((item) => item.age > 20 && item.age < 29)
    .map((item) => item.name);
};

console.log(returnTheNames(input));
