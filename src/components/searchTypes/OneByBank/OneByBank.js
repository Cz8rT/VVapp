import React, {useEffect, useState} from "react";
import './oneByBank.scss';

const bankAccount = '94814522512683789765158332';
const date = new Date();
const OneByBank = ({typeReturn}) => {
    const [error, setError] = useState(false);

    // Server GET
    useEffect(() => {
        fetch(`https://wl-test.mf.gov.pl/api/search/bank-account/${bankAccount}?date=2020-02-16`)
            .then((res) => {
                return res.json();
            }).then(res => console.log(res))
            .catch(() => {
                setError(true);
            });
    }, []);

    return (
        <section className={'searchOption oneByBank'}>
            <h4>Typ wyszukiwania: <strong>Konto bankowe</strong></h4>
            <button className={'typeReturn'} onClick={typeReturn}>Zmień typ wyszukiwania</button>
            
        </section>
    )
};

export default OneByBank;