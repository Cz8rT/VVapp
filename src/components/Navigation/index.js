import React from "react";
import './style/style.scss'

const Navigation = () => {
    return (
        <nav>
            <div className={'logo_box'}>
                <h1 className={'logo'}>VV<span>app</span></h1>
                <i className="fas fa-bars"/>
            </div>
            <ul>
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
    )
};

export default Navigation;