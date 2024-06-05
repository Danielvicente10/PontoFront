import React from 'react';
import './style.css';

interface ButtonEnviarProps {
    onClick: () => void;
    disabled: boolean;
    className: string;
    title: string;
}

const ButtonEnviar: React.FC<ButtonEnviarProps> = ({ onClick, disabled, className, title }) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    );
}

export { ButtonEnviar };
