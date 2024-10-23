import React, { useState, useEffect } from 'react';
import './style.css';
import { Input, InputPassword } from '../../Componentes/Inputs/Input';
import { ButtonEnviar } from '../../Componentes/Buttons/buttons';
import { useNavigate } from 'react-router-dom';
import { faArrowLeft, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsButtonEnabled(name.trim() !== '' && password.trim() !== '' && password === confirmPassword);
    }, [name, password, confirmPassword, email]);

    const handleLogin = async () => {
        const requestBody = { name, email, password };

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

            setShowIcon(true);
            setTimeout(() => {
                navigate('/Home', { state: { userData: data[0] } });
            }, 2000);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className='login-container'></div>
    );
};

export default Register;
