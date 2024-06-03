import React from 'react';
import './style.css';

interface ButtonEnviarProps {
    onClick: () => void;
    disabled: boolean;
    className: string;
}

const ButtonEnviar: React.FC<ButtonEnviarProps> = ({ onClick, disabled, className }) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            Enviar
        </button>
    );
}

export { ButtonEnviar };
