import React, { useState } from 'react';
import './style.css';
import { InputWithTitle } from '../../Componentes/Inputs/Input';
import { ButtonCadastro } from '../../Componentes/Buttons/buttons';

const RegistreCompany: React.FC = () => {
    const [name, setName] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    };

    function testeClick() {
        console.log('teste');
    }

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '90%', display: 'flex', flexWrap: 'wrap', padding: '40px', gap: '80px', background: '#a7a398', borderRadius: '10px', position: 'absolute' }}>
                <InputWithTitle title="Nome" value={name} onChange={handleInputChange(setName)} />
                <InputWithTitle title="Razão social" value={razaoSocial} onChange={handleInputChange(setRazaoSocial)} />
                <InputWithTitle title="CNPJ" value={cnpj} onChange={handleInputChange(setCnpj)} />
                <InputWithTitle title="Data de inicio" value={dataInicio} onChange={handleInputChange(setDataInicio)} />
                <InputWithTitle title="Telefone" value={telefone} onChange={handleInputChange(setTelefone)} />
                <InputWithTitle title="Nome fantasia" value={nomeFantasia} onChange={handleInputChange(setNomeFantasia)} />
                <InputWithTitle title="Cidade" value={cidade} onChange={handleInputChange(setCidade)} />
                <InputWithTitle title="Estado" value={estado} onChange={handleInputChange(setEstado)} />
                <InputWithTitle title="Pais" value={pais} onChange={handleInputChange(setPais)} />
                <div style={{ position: 'absolute', bottom: '40px', right: '10%' }}>
                    <ButtonCadastro onClick={testeClick} />
                </div>
            </div>
        </div>
    );
};

export default RegistreCompany;
