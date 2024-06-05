import React, { useState, useEffect } from 'react';
import './style.css';
import { Input, InputPassword } from '../../Componentes/Inputs/Input';
import { ButtonEnviar } from '../../Componentes/Buttons/buttons';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/Register');
    };

    return (
        <div className='login-container'>
            <div className='input-container'>
            <h1>Login</h1>
                <Input title="E-mail" value={name} onChange={(e) => setName(e.target.value)} />
                <InputPassword title="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div style={{marginTop: "-20px"}}>
                    <span style={{fontSize: "12px"}}>Não tem uma conta <a className='register' onClick={handleClick}>Cadastre-se</a></span>
                </div>
                <ButtonEnviar
                    className={`button ${isButtonEnabled ? 'enabled' : 'disabled'}`}
                    disabled={!isButtonEnabled}
                    onClick={handleLogin}
                    title='Entrar'
                />
            </div>
        </div>
    );
};

export default Login;
