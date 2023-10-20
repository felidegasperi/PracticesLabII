import List from "./List";

const Form = ({ items, setItems, inputRef, setLogin, setButton }) => {
  const addTaskHandler = (e) => {
    e.preventDefault();
    inputRef.current.value.length === 0
      ? alert("Error al cargar producto, verifique!")
      : setItems([...items, inputRef.current.value]);
    inputRef.current.value = "";
  };

  const logOutHandler = () => {
    setLogin(false);
    setButton(false);
    setItems([]);
  };

  return (
    <div>
      <form>
        <label>Ingresar producto: </label>
        <input type="text" ref={inputRef} />
        <button onClick={addTaskHandler}>Agregar tarea</button>
        <button onClick={logOutHandler}>Cerrar Sesion</button>
      </form>
      <List items={items} setItems={setItems} />
    </div>
  );
};

export default Form;
