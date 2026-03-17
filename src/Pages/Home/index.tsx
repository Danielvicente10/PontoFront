import React, { useEffect, useState } from "react";
import { NavBarVertical } from "../../Componentes/NavBar/Input";
import "./style.css";
import api from "../../services/app";

const Home: React.FC = () => {
  const [hora, setHora] = useState("");
  const [pontos, setPontos] = useState<Date[]>([]);

  const getHoraAtual = () => {
    return new Date().toLocaleTimeString("pt-BR");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(getHoraAtual());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const marcarPonto = async () => {
    const time = new Date();

    try {
      const response = await api.post("/ponto", {
        time: time,
      });

      setPontos([...pontos, time]);
    
    }
    catch (error) {
      console.error("Erro ao marcar ponto:", error);
    } 
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <NavBarVertical />

      <div style={{ margin: "20px" }}>
        <h1>{hora}</h1>

        <button className="btn-ponto" onClick={marcarPonto}>
          Marcar ponto
        </button>
      </div>
    </div>
  );
};

export default Home;