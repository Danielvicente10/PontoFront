import React, {useState} from 'react';
import './style.css';
import { ButtonMarcarPonto } from '../Buttons/buttons';

const MarkPointer: React.FC = () => {
    const [entrada, setEntrada] = useState("");
    const [intervalo, setIntervalo] = useState("");
    const [fimIntervalo, setFimIntervalo] = useState("");
    const [fimExpediente, setFimExpediente] = useState("");
   
  
    const handlerClick = () => {
        const now = new Date();
        const formattedDate = now.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        setEntrada(formattedDate);
        setIntervalo(formattedDate);
        setFimIntervalo(formattedDate);
        setFimExpediente(formattedDate);
    };


    return (
        <div style={{width: "30%"}}>
            <div className='container-mark'>
                <div>
                    <p>Entrada</p>
                    <p>{entrada}</p>
                </div>
                <div>
                    <p> Inicio almoço </p>
                    <p>{intervalo}</p>
                </div>
                <div>
                    <p> Fim almoço </p>
                    <p>{fimIntervalo}</p>
                </div>
                <div>
                    <p> Fim expediente </p>
                    <p>{fimExpediente}</p>
                </div>              
            </div>
            <ButtonMarcarPonto onClick={handlerClick} />
        </div>
    );
};

export default MarkPointer;


