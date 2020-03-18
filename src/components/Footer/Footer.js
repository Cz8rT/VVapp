import React from "react";
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <h4>Copyright &copy; 2020 <p className={'logo footer_logo'}>VV<span>app</span></p></h4>
            <a href={'mailto:adam.welnicki@gmail.com'}>adam.welnicki@gmail.com</a>
        </footer>
    )
};

export default Footer;
