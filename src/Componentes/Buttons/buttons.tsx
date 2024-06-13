import React from 'react';
import './style.css';

interface ButtonEnviarProps {
    onClick: () => void;
    disabled: boolean;
    className: string;
    title: string;
}

const handlerClickPonto = () => (
    console.log(new Date)
);

const ButtonEnviar: React.FC<ButtonEnviarProps> = ({ onClick, disabled, className, title }) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    );
}


const ButtonMarcarPonto: React.FC = () => {
    return(
        <div className='container-buttom'>
            <button className='buttom-ponto' onClick={handlerClickPonto}>Click Aqui!</button>
        </div>
    )
    
}

export { ButtonEnviar, ButtonMarcarPonto };
