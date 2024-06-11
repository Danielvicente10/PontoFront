import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavBarVertical } from '../../Componentes/NavBar/Input';
import './style.css';

const Home: React.FC = () => {
    const location = useLocation();
    const userData = location.state?.userData;
    console.log(userData)
    const handlerClickPonto = () => (
        console.log(new Date)
    );

    return (
        <div style={{display: "flex"}}>
            <NavBarVertical ></NavBarVertical>
            <div className='container-buttom'>
                <button className='buttom-ponto' onClick={handlerClickPonto}>Click Aqui!</button>
            </div>
        </div>
    );
};

export default Home;
