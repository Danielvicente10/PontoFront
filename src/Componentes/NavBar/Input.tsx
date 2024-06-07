import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const NavBar: React.FC = () => {
    const [isShow, setIsShow] = useState(false);
    const handlerPassword = () => setIsShow(!isShow);

    return (
        <div className={`container ${!isShow ? 'collapsed' : ''}`}>
            <nav>
                <ul>
                    <li onClick={handlerPassword}>
                        {isShow ? <FontAwesomeIcon icon={faArrowRightLong} /> : <FontAwesomeIcon icon={faBars} />}
                    </li>
                    <li>Home</li>
                    <li>Cadastro</li>
                    <li>Resgistro de ponto</li>
                </ul>
            </nav>
        </div>
    );
}

export { NavBar };
