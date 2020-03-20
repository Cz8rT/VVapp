import React from "react";
import './serverAnswerShort.scss';

const ServerAnswerShort = ({answer}) => {
    const accountAssigned = answer.result.accountAssigned;
    const requestDate = answer.result.requestDateTime;
    const requestId = answer.result.requestId;

    return (
        <div className={'serverAnswer_Container'}>
            <h2>Wykaz podmiotów zarejestrowanych jako podatnicy VAT</h2>
            <h3>Data wyszukania: {requestDate}</h3>
            {accountAssigned === "TAK" ? <p className={'yes'}>Podmiot figuruje w rejestrze VAT</p> : <p className={'no'}>Podmiot nie figuruje w rejestrze VAT</p>}
            <p>Identyfikator wyszukiwania: {requestId}</p>
        </div>
    )
};

export default ServerAnswerShort;