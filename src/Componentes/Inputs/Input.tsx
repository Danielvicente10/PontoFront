import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock, faLock } from '@fortawesome/free-solid-svg-icons';

interface InputProps {
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ title, value, onChange }) => {
    return (
        <div>
            <label className='input-title'>{title}</label>
            <input type="email" 
                className='containerIndex' 
                value={value} onChange={onChange} 
                placeholder={title === 'E-mail' ? 'Digite seu e-mail.' : 'Digite seu nome.'}
            />
        </div>
    );
}

const InputPassword: React.FC<InputProps> = ({ title, value, onChange }) => {
    const [isShow, setIsShow] = useState(false);
    const handlerPassword = () => setIsShow(!isShow);

    return (

        <div>
            <label className='input-title'>{title}</label>
            <div className='password-container'>
                <input 
                    type={isShow? "text" : "password"} 
                    className='containerIndex' value={value} 
                    onChange={onChange} placeholder={title === 'Senha' ? 'Digite sua senha.' : 'Confirme sua senha.'}
                />
                <button onClick={handlerPassword} type='button' style={{border: "none"}}>
                    {isShow && <FontAwesomeIcon icon={faUnlock} className='password-icon' />}
                    {!isShow && <FontAwesomeIcon icon={faLock} className='password-icon' />}
                </button>

            </div>
        </div>
    );
}

export { Input, InputPassword };
