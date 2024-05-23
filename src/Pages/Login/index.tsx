import React, { useState, useEffect } from 'react';
import './style.css';
import { Input, InputPassword } from '../../Componentes/Input';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        setIsButtonEnabled(email.trim() !== '' && password.trim() !== '');
    }, [email, password]);

    return (
        <div className='login-container'>
            <div className='input-container'>
                <Input title="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <InputPassword title="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button
                    className={`button ${isButtonEnabled ? 'enabled' : 'disabled'}`}
                    disabled={!isButtonEnabled}
                >
                    Enviar
                </button>
            </div>
        </div>
    );
}

export default Login;
