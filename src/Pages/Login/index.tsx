import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonEnviar } from "../../Componentes/Buttons/buttons";
import { Input, InputPassword } from "../../Componentes/Inputs/Input";
import { User,} from "../../data/users";
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
    try {

      const storedUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");

      console.log("Usuarios cadastrados:", storedUsers);
    
      const user = storedUsers.find(
        (u) => u.email === name && u.password === password
      );
    
      if (!user) {
        console.log("Email ou senha inválida");
        return;
      }

        navigate("/Home");
      
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
