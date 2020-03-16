import React, {useState} from "react";
import './style/style.scss'

const Navigation = () => {
    const [isActive, setIsActive] = useState(true);

    const hamburgerClickHandler = () => {
        setIsActive(prevState => !prevState)
    };

    return (
        <header>
            <nav>
                <div className={'logo_box'}>
                    <h1 className={'logo'}>VV<span>app</span></h1>
                    {isActive ? <i className="fas fa-bars" onClick={hamburgerClickHandler}/> :
                        <i className="fas fa-times" onClick={hamburgerClickHandler}></i>}
                </div>
                <ul className={isActive ? 'dnone' : null}>
                    <li>
                        <a href={'#'}>Szukaj</a>
                    </li>
                    <li>
                        <a href={'#'}>O<span className={'list_logo1'}>VV</span>
                            <span className={'list_logo2'}>app</span></a>
                    </li>
                    <li><a href={'#'}>Jak używać</a></li>
                    <li><a href={'#'}>Kontakt</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Navigation;