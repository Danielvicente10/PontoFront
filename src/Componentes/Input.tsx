import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface InputProps {
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ title, value, onChange }) => {
    return (
        <div>
            <label className='input-title'>{title}</label>
            <input type="email" className='containerIndex' value={value} onChange={onChange} />
            {/* <FontAwesomeIcon icon={faEnvelope} className='icon-email' /> */}
        </div>
    );
}

const InputPassword: React.FC<InputProps> = ({ title, value, onChange }) => {
    return (
        <div>
            <label className='input-title'>{title}</label>
            <div className='password-container'>
                <input type="password" className='containerIndex' value={value} onChange={onChange} />
                <FontAwesomeIcon icon={faUnlock} className='password-icon' />
            </div>
        </div>
    );
}

export { Input, InputPassword };
