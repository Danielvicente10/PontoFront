import React from "react";
import { NavBarVertical } from "../../Componentes/NavBar/Input";
import "./style.css";
var totalDias = [];
const marcarPonto = () => {
  var hora = new Date();
  if (totalDias.length < 1) {
    totalDias.push(hora);
    alert("Ponto marcado com sucesso!" + hora.toLocaleTimeString());
  }
};

const Home: React.FC = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <NavBarVertical />

      <div className="home-container">
        <div className="home-content">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
            }}
          >
            <p id="subistiuir-conteudo">
              Marque seu ponto de forma rápida e fácil!
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <button className="btn-ponto" onClick={marcarPonto}>
              Marcar ponto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
