import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBarVertical: React.FC = () => {
    const [isShow, setIsShow] = useState(false);
    const handleToggle = () => setIsShow(!isShow);
    const navigate = useNavigate();

    const handleClick = (route: string) => () => {
        if (route === 'home') {
            navigate('/Home');
        } else if (route === 'register') {
            navigate('/register');
        } else if (route === 'scorePoint') {
            navigate('/scorePoint');
        }
    };

    return (
        <div className={`container ${!isShow ? 'collapsed' : ''}`}>
            <nav>
                <ul>
                    <li onClick={handleToggle}>
                        {isShow ? <FontAwesomeIcon icon={faArrowLeftLong} /> : <FontAwesomeIcon icon={faBars} />}
                    </li>
                    <li onClick={handleClick('home')}>Home</li>
                    <li onClick={handleClick('register')}>Cadastro</li>
                    <li onClick={handleClick('scorePoint')}>Registro de ponto</li>
                </ul>
            </nav>
        </div>
    );
}

export { NavBarVertical };



// const NavBarHorizontal: React.FC = () => {
//     const [isShow, setIsShow] = useState(false);
//     const handlerPassword = () => setIsShow(!isShow);

//     return (
//         <div className='container-horizontal'>
//             <nav>
//                 <ul>
//                     <li>Home</li>
//                     <li>Cadastro</li>
//                     <li>Resgistro de ponto</li>
//                 </ul>
//             </nav>
//         </div>
//     );
// }

//export { NavBarVertical,NavBarHorizontal}