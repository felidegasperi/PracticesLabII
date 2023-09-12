import "./App.css";
import Table from "./components/Table";

const netIncomes = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
];

function App() {
  return (
    <div className="App">
      <h3>Practica Obligatoria 2</h3>
      <Table netIncomes={netIncomes} />
    </div>
  );
}

export default App;
