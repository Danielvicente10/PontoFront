import React, { useState, useEffect } from 'react';
import './style.css';
import { Input, InputPassword } from '../../Componentes/Inputs/Input';
import { ButtonEnviar } from '../../Componentes/Buttons/buttons';

const Login: React.FC = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        setIsButtonEnabled(name.trim() !== '' && password.trim() !== '');
    }, [name, password]);

    const handleLogin = async () => {
        const requestBody = { name, password };

        try {
            const response = await fetch('http://localhost:3030/user/insertUsers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className='login-container'>
            <div className='input-container'>
                <Input title="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                <InputPassword title="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <ButtonEnviar
                    className={`button ${isButtonEnabled ? 'enabled' : 'disabled'}`}
                    disabled={!isButtonEnabled}
                    onClick={handleLogin}
                />
            </div>
        </div>
    );
};

export default Login;
