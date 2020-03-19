import React from "react";
import './styleContact.scss'
import phone from './../../pictures/phone.jpeg';

const Contact = () => {
    return (
        <main className={'contact'}>
            <div className={'contact_div'}>
                <div>
                <h1>Chcesz się z nami skontaktować?</h1>
                    <p>Masz pytania odnośnie<strong>VV<span>app</span></strong></p>
                    <p>lub chcesz zgłosić błąd?</p>
                    <p>Skontaktuj się z nami!</p>
                    <p className={'toContact'}>Email: <a href={'mailto:adam.welnicki@gmail.com'}>adam.welnicki@gmail.com</a></p>
                    <p className={'toContact'}>Telefon: +48 5439002</p>
                </div>
                <img src={phone} alt={"contact phone"}/>
            </div>
        </main>
    )
};

export default Contact;