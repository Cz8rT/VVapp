import React, {useState, useEffect} from "react";
import {useMediaQuery} from 'react-responsive';
import {NavLink} from "react-router-dom";
import './style/style.scss';

const Navigation = () => {
    const [isActive, setIsActive] = useState(true);
    const isBigScreen = useMediaQuery({query: '(min-width: 1500px)'});

    // Hidding ul list for smaller window width, if screen width exeeds 1500px
    if (isBigScreen && !isActive) {
        setIsActive(true);
    }

    // Adding class .dnone to ul list after hamburger click
    const hamburgerClickHandler = () => {
        setIsActive(prevState => !prevState)
    };

    // Hidding navigation after clicking an element
    const linkClickHandler = () => {
        setIsActive(true);
    };

    return (
        <header>
            <nav>
                <div className={'logo_box'}>
                    <NavLink exact to='/' onClick={linkClickHandler}>
                        <h1 className={'logo'}>VV<span>app</span></h1>
                    </NavLink>
                    {isActive ? <i className="fas fa-bars" onClick={hamburgerClickHandler}/> :
                        <i className="fas fa-times" onClick={hamburgerClickHandler}></i>}
                </div>
                <ul className={isActive ? 'dnone' : null}>
                    <li>
                        <NavLink exact to='/' className={'navlink'}
                                 activeClassName={'linkActive'}
                                 onClick={linkClickHandler}>Szukaj</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'} className={'navlink'}
                                 activeClassName={'linkActive'}
                                 onClick={linkClickHandler}>O<span
                            className={'list_logo1'}>VV</span>
                            <span className={'list_logo2'}>app</span></NavLink>
                    </li>
                    <li><NavLink to={'/howtouse'} className={'navlink'}
                                 activeClassName={'linkActive'}
                                 onClick={linkClickHandler}>Jak używać</NavLink></li>
                    <li><NavLink to={'/contact'} className={'navlink'}
                                 activeClassName={'linkActive'}
                                 onClick={linkClickHandler}>Kontakt</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};

export default Navigation;