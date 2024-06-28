import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBarVertical } from '../../Componentes/NavBar/Input';
import './style.css';
import { ButtonMarcarPonto } from '../../Componentes/Buttons/buttons';
import MarkPointer from '../../Componentes/MarkPointer/';
import { InputWithTitle } from '../../Componentes/Inputs/Input';

const RegistreCompany: React.FC = () => {
    const [password, setPassword] = useState('');


    return (
        <div style={{display: "flex"}}>
           <InputWithTitle title='' value='' onChange={(e) => setPassword(e.target.value)}></InputWithTitle>
            
        </div>
    );
};

export default RegistreCompany;
