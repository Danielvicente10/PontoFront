import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavBarVertical } from '../../Componentes/NavBar/Input';
import './style.css';
import { ButtonMarcarPonto } from '../../Componentes/Buttons/buttons';

const Home: React.FC = () => {
    const location = useLocation();
    const userData = location.state?.userData;
    console.log(userData)


    return (
        <div style={{display: "flex"}}>
            <NavBarVertical></NavBarVertical>
            <div style={{border: "1px solid", width: "25%", display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: "30px", marginTop: "10%", marginBottom: "10%"}}>
                <div><p style={{padding: "20px", overflow: "hidden", marginRight: "20px"}}>xxxxxxxxxxxxxxxxxx Entrada xxxxxxxxxxxxxxxxxxx</p></div>
                <div><p style={{padding: "20px", overflow: "hidden", marginRight: "20px"}}>xxxxxxxxxxxxxxxxxx Inicio almoço xxxxxxxxxxxxx</p></div>
                <div><p style={{padding: "20px", overflow: "hidden", marginRight: "20px"}}>xxxxxxxxxxxxxxxxxx Fim almoço xxxxxxxxxxxxxxxx</p></div>
                <div><p style={{padding: "20px", overflow: "hidden", marginRight: "20px"}}>xxxxxxxxxxxxxxxxxx Fim expediente xxxxxxxxxxxx</p></div>              
            </div>
            <ButtonMarcarPonto></ButtonMarcarPonto>
        </div>
    );
};

export default Home;
