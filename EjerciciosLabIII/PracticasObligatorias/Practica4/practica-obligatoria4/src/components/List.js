import React from "react";

const List = ({ items, setItems }) => {
  const deleteHandler = (index) => {
    const copyOfItems = items.filter((_, i) => i !== index);
    setItems(copyOfItems);
  };

  return (
    <div>
      {items.map((items, i) => (
        <div>
          <li key={i}>{items}</li>
          <div>
            <button onClick={() => deleteHandler(i)}>Eliminar tarea</button>
          </div>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default List;
