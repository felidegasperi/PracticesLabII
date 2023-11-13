import React, { useState } from "react";

const List = ({ items, setItems }) => {
  const [changeStateItems, setChangeStateItems] = useState(
    items.map(() => false)
  );

  const deleteHandler = (index) => {
    const copyOfItems = [...items];
    copyOfItems.splice(index, 1);
    setChangeStateItems(changeStateItems.filter((_, i) => i !== index));
    setItems(copyOfItems);
  };

  const modifyHandler = (index) => {
    const otherCopyOfItems = [...changeStateItems];
    otherCopyOfItems[index] = !otherCopyOfItems[index];
    setChangeStateItems(otherCopyOfItems);
  };
  return (
    <div>
      {items.map((tasks, index) => (
        <div key={tasks.id}>
          <li
            style={{
              textDecoration: changeStateItems[index] ? "line-through" : "none",
            }}
          >
            {tasks}
          </li>
          <div>
            <button onClick={() => modifyHandler(index)}>
              {changeStateItems[index]
                ? "Tarea no completada"
                : "Tarea completada"}
            </button>
            <button onClick={() => deleteHandler(index)}>Eliminar tarea</button>
          </div>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default List;
