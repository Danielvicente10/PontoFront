import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonEnviar } from "../../Componentes/Buttons/buttons";
import { Input, InputPassword } from "../../Componentes/Inputs/Input";
import "./style.css";

const Login: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setIsButtonEnabled(name.trim() !== "" && password.trim() !== "");
  }, [name, password]);
  const navigates = useNavigate();
  const handleLogin = async () => {
    const requestBody = { name, password };

    try {
      const response = await fetch("http://localhost:3030/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const contentType = response.headers.get("Content-Type");

      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (response.ok) {
        if (data == "Error") {
          return console.log("Senha invalida");
        }
        navigate("/Home");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Register");
  };

  return (
    <div className="login-container">
      <div className="input-container">
        <h1>Login</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Input
            title="E-mail"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "calc(100% - 120px)",
            }}
          />
          <InputPassword
            title="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "calc(100% - 120px)",
            }}
          />
        </div>
        <div style={{ marginTop: "-20px" }}>
          <span style={{ fontSize: "12px" }}>
            Não tem uma conta{" "}
            <a className="register" onClick={handleClick}>
              Cadastre-se
            </a>
          </span>
        </div>
        <ButtonEnviar
          className={`button ${isButtonEnabled ? "enabled" : "disabled"}`}
          disabled={!isButtonEnabled}
          onClick={handleLogin}
          title="Entrar"
        />
      </div>
    </div>
  );
};

export default Login;
