import React, { useState, useEffect } from 'react';
import './style.css';
import Input from '../../Componentes/Input';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        // Verifica se ambos os inputs têm valores não vazios e não são apenas espaços em branco
        if (email.trim() && password.trim()) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [email, password]);

    return (
        <div className='login-container'>
            <div className='input-container'>
                <Input title="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input title="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
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