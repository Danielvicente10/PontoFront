import React from 'react';
import './style.css';

interface InputProps {
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ title, value, onChange }) => {
    return (
        <div>
            <label className='input-title'>{title}</label>
            <input type="text" className='containerIndex' value={value} onChange={onChange} />
        </div>
    );
}

export default Input;