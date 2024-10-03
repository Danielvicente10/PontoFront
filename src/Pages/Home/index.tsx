import React from "react";
import { useLocation } from "react-router-dom";
import { NavBarVertical } from "../../Componentes/NavBar/Input";
import "./style.css";

const Home: React.FC = () => {
  const location = useLocation();
  const userData = location.state?.userData;
  return (
    <div style={{ display: "flex" }}>
      <NavBarVertical></NavBarVertical>
      {/* <MarkPointer></MarkPointer> */}
    </div>
  );
};

export default Home;
