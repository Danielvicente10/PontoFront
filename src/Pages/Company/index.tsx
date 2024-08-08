import React, { useState } from 'react';
import './style.css';
import { InputWithTitle } from '../../Componentes/Inputs/Input';
import { ButtonCadastro } from '../../Componentes/Buttons/buttons';

const RegistreCompany: React.FC = () => {
    const [password, setPassword] = useState('');

    function testeClick(){
        console.log('teste')
    };

    return (
        
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <div style={{width:'80%', display: 'flex', flexWrap: 'wrap', padding: '40px', gap: '80px', background: '#a7a398', borderRadius: '10px'}}>
                <InputWithTitle title='Nome' value='' onChange={(e) => setPassword(e.target.value)}></InputWithTitle>
                <InputWithTitle title='Razão social' value='' onChange={(e) => setPassword(e.target.value)}></InputWithTitle>
                <InputWithTitle title='CNPJ' value='' onChange={(e) => setPassword(e.target.value)}></InputWithTitle>
                <InputWithTitle title='Data de inicio' value='' onChange={(e) => setPassword(e.target.value)}></InputWithTitle>
                <InputWithTitle title='Telefone' value='' onChange={(e) => setPassword(e.target.value)}></InputWithTitle>
                <InputWithTitle title='Nome fantasia' value='' onChange={(e) => setPassword(e.target.value)}></InputWithTitle>
                <InputWithTitle title='Cidade' value='' onChange={(e) => setPassword(e.target.value)}></InputWithTitle>
                <InputWithTitle title='Estado' value='' onChange={(e) => setPassword(e.target.value)}></InputWithTitle>
                <InputWithTitle title='Pais' value='' onChange={(e) => setPassword(e.target.value)}></InputWithTitle>
                <ButtonCadastro onClick={testeClick}></ButtonCadastro>
            </div>
        </div>
    );
};

export default RegistreCompany;
function testeClick() {
    throw new Error('Function not implemented.');
}

