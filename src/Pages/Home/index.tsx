import React, { useState } from "react";
import { NavBarVertical } from "../../Componentes/NavBar/Input";
import "./style.css";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";

const Home: React.FC = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, setValue] = useState<Value>(new Date());
  const [valor, setValor] = useState<string>("");

  // Função para lidar com a seleção de datas
  const handleDateChange = (selectedDate: Value) => {
    setValue(selectedDate);
    
    // Verifica se é uma única data ou um intervalo de datas
    if (selectedDate instanceof Date) {
      setValor(selectedDate.toLocaleDateString('pt-BR')); // Formata para o padrão brasileiro
    } else if (Array.isArray(selectedDate)) {
      const [start, end] = selectedDate;
      setValor(`${start?.toLocaleDateString('pt-BR')} - ${end?.toLocaleDateString('pt-BR')}`);
    }
  };

  return (
    <div style={{ display: "flex" }} className="content">
      <NavBarVertical />
      <div className="body">
        <Calendar onChange={handleDateChange} value={value} />
        <div style={{ background: '#fff', height: '15px', width: '350px' }}>
          <p>{valor}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
