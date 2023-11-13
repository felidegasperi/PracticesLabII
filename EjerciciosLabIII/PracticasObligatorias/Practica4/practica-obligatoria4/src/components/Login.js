import React, { useState } from "react";
import Form from "./Form";

const Login = ({ setButton, setLogin, login, inputRef, items, setItems }) => {
  const [username, setUsername] = useState("");

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
    e.target.value.toLowerCase().includes("o")
      ? alert("Por favor, !Nombres de usuario sin la letra o¡")
      : "";
  };

  const RegisterHandler = () => {
    if (username === "" || username.toLowerCase().includes("o")) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("Usuario registrado correctamente");
      setLogin(true);
    }
    console.log(login);
  };

  const buttonHandler = () => {
    setButton(false);
  };

  return (
    <>
      {login ? (
        <Form
          inputRef={inputRef}
          setItems={setItems}
          items={items}
          setLogin={setLogin}
          setButton={setButton}
        />
      ) : (
        <div>
          <div>
            <input
              placeholder="Username"
              onChange={changeUsernameHandler}
            ></input>
          </div>
          <div>
            <button onClick={RegisterHandler}>Registrarse</button>
            <button onClick={buttonHandler}>Cancelar</button>
            <p>{username}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
