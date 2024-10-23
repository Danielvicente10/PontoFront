import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import MarkPointer from '../MarkPointer';

const NavBarVertical: React.FC = () => {
    const [isShow, setIsShow] = useState(true);
    const handleToggle = () => setIsShow(!isShow);
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();

    const handleClick = (route: string) => () => {
        if (route === 'home') {
            navigate('/Home');
        } else if (route === 'register') {

        } else if (route === 'scorePoint') {
            navigate('/scorePoint');
        }
    };

    return (
        <>
        <div className={`container ${!isShow ? 'collapsed' : ''}`}>
            <nav>
                <ul>
                    <li onClick={handleToggle}>
                        {isShow ? <FontAwesomeIcon icon={faArrowLeftLong} /> : <FontAwesomeIcon icon={faBars} />}
                    </li>
                    <li onClick={handleClick('register')}>Agendamento</li>
                    <li onClick={handleClick('scorePoint')}>Quem sou?</li>
                </ul>
            </nav>
        </div>        
        </>
    );
}

export { NavBarVertical };
