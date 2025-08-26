import {
  faArrowLeftLong,
  faBars,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const NavBarVertical: React.FC = () => {
  const [isShow, setIsShow] = useState(true);
  const handleToggle = () => setIsShow(!isShow);
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal(!modal);
  const navigate = useNavigate();

  const handleClick = (route: string) => () => {
    if (route === "home") {
      navigate("/Home");
    } else if (route === "register") {
      handleModal();
    } else if (route === "scorePoint") {
      navigate("/scorePoint");
    } else if (route === "registerCompany") {
      navigate("/registerCompany");
    }
  };

  return (
    <>
      <div className={`container ${!isShow ? "collapsed" : ""}`}>
        <nav>
          <ul>
            <li onClick={handleToggle}>
              {isShow ? (
                <FontAwesomeIcon icon={faArrowLeftLong} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </li>
            <li onClick={handleClick("home")}>
              <FontAwesomeIcon icon={faHouse} />
              Home
            </li>
            <li onClick={handleClick("register")}>
              <FontAwesomeIcon icon={faUser} />
              Perfil
            </li>
            {/* <li onClick={handleClick("scorePoint")}>Registro de ponto</li>
            <li onClick={handleClick("registerCompany")}>
              Cadastro de empresa
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export { NavBarVertical };
