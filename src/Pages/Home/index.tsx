import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavBar } from '../../Componentes/NavBar/Input';

const Home: React.FC = () => {
    const location = useLocation();
    const userData = location.state?.userData;
    console.log(userData)

    return (
        <div>
            {/* <h1>Bem-vindo à Home!</h1>
            {userData && (
                <div>
                    <p>Nome: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                </div>
            )} */}
            <NavBar ></NavBar>
        </div>
    );
};

export default Home;
