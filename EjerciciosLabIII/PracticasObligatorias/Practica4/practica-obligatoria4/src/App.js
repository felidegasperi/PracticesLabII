import { useRef, useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [button, setButton] = useState(false);
  const [items, setItems] = useState([]);
  const [login, setLogin] = useState(false);
  const inputRef = useRef("");

  const buttonHandler = () => {
    setButton(true);
  };

  return (
    <div className="App">
      <h3>Practica Obligatoria 4</h3>
      {button ? (
        <Login
          setButton={setButton}
          setLogin={setLogin}
          login={login}
          setItems={setItems}
          items={items}
          inputRef={inputRef}
        />
      ) : (
        <button onClick={buttonHandler}>Iniciar Sesion</button>
      )}
    </div>
  );
}

export default App;

// Utilizando el login de la práctica obligatoria 3, crear un botón que diga “Iniciar sesión”y que al apretarlo nos muestra el login. Además, crear un botón
// “Cerrar sesión” que al apretarlo nos cierre la sesión y nos permita nuevamente iniciar sesión.
// Una vez que el usuario inició sesión debemos mostrarle la lista de tareas (si es el primer uso de la app se la debemos mostrar vacía con algún mensaje que nos lo indique).
// La app nos debe permitir:
// Agregar una nueva tarea a la lista.
// Marcar una tarea como completada e indicarlo de alguna manera (tachando el texto o cambiando el color del mismo (gris claro, por ejemplo)).
// Borrar una tarea de la lista.
// Sugerencias:
// Crear el estado de las tareas en App.js para que se facilite el pasaje entre componentes.
// Crear un componente tipo lista que nos muestre todas las tareas de una lista.
// Crear un componente tipo formulario que muestre la información y todo lo necesario para el ABM de una tarea.
// Crear un componente que nos permite agregar una nueva tarea.
