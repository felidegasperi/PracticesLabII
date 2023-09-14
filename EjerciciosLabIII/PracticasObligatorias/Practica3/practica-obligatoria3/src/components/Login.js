import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
    e.target.value.toLowerCase().includes("o")
      ? alert("Por favor, !Nombres de usuario sin la letra o¡")
      : "";
  };

  const RegisterHandler = () => {
    username === "" || username.toLowerCase().includes("o")
      ? alert("Usuario inválido para registrarse")
      : alert("Usuario registrado correctamente");
  };
  return (
    <>
      <div>
        <input placeholder="Username" onChange={changeUsernameHandler}></input>
      </div>
      <div>
        <button onClick={RegisterHandler}>Registrarse</button>
        <p>{username}</p>
      </div>
    </>
  );
};

export default Login;
