import { faArrowLeft, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonEnviar } from "../../Componentes/Buttons/buttons";
import { Input, InputPassword } from "../../Componentes/Inputs/Input";
import "./style.css";
import api from "../../services/app";

export interface User {
  id: string;
  name: string;
  password: string;
  email: string;
}

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsButtonEnabled(
      name.trim() !== "" &&
        password.trim() !== "" &&
        password === confirmPassword
    );
  }, [name, password, confirmPassword, email]);

  const handleLogin = async () => {
    try {
      const response = await api.post("/user", {
        name,
        email,
        password,
      });

      console.log("Usuário criado:", response.data);

      setShowIcon(true);

      setTimeout(() => {
        navigate("/Home", { state: { userData: response.data } });
      }, 2000);
    } catch (error: any) {
      console.error("Erro ao cadastrar:", error.response?.data || error.message);
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="input-container">
        {showIcon ? (
          <FontAwesomeIcon icon={faUserCheck} className="user-check" />
        ) : (
          <>
            <span className="back" onClick={handleClick}>
              <FontAwesomeIcon icon={faArrowLeft} className="arrow-left" />
              voltar
            </span>
            <h1>Cadastro</h1>
            <div className="group-inputs-register">
              <Input
                title="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{}}
              />
              <Input
                title="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{}}
              />
              <InputPassword
                title="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{}}
              />
              <InputPassword
                title="Confirme a senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{}}
              />
              <ButtonEnviar
                className={`button ${isButtonEnabled ? "enabled" : "disabled"}`}
                disabled={!isButtonEnabled}
                onClick={handleLogin}
                title="Cadastrar"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
