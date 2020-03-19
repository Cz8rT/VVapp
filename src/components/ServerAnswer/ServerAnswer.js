import React from "react";
import './serverAnswer.scss';

const ServerAnswer = ({answer}) => {
    // const name = answer.result.subjects[0].name;
    // const nip = answer.result.subjects[0].nip;
    const {
        name, nip, pesel, statusVat, regon, krs, residenceAddress, workingAddress,
        representatives, authorizedClerks, partners, accountNumbers,
        hasVirtualAccounts, registrationLegalDate, registrationDenialBasis,
        registrationDenialDate, removalBasis, removalDate, restorationDate, restorationBasis
    } = answer.result.subjects[0];
    const requestDate = answer.result.requestDateTime;
    const requestId = answer.result.requestId;

    return (
        <div className={'serverAnswer_Container'}>
            <h2>Wykaz podmiotów zarejestrowanych jako podatnicy VAT,
                niezarejestrowanych oraz wykreślonych i przywróconych do rejestru VAT</h2>
            <h3>Data wyszukania: {requestDate}</h3>
            <table>
                <thead>
                <tr>
                    <th colSpan={2}><p>Figuruje w rejestrze VAT</p></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Firma (nazwa) lub imię i nazwisko</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Numer, za pomocą którego podmiot został zidentyfikowany na potrzeby podatku,
                        jeżeli taki numer został przyznany
                    </td>
                    <td>{nip}</td>
                </tr>
                <tr>
                    <td>Numer PESEL, o ile podmiot posiada</td>
                    <td>{pesel}</td>
                </tr>
                <tr>
                    <td>Status podatnika (wg stanu na dzień sprawdzenia)</td>
                    <td>{statusVat}</td>
                </tr>
                <tr>
                    <td>Numer identyfikacyjny REGON, o ile został nadany</td>
                    <td>{regon}</td>
                </tr>
                <tr>
                    <td>Numer w Krajowym Rejestrze Sądowym, o ile został nadany</td>
                    <td>{krs}</td>
                </tr>
                <tr>
                    <td>Adres siedziby – w przypadku podmiotu niebędącego osobą fizyczną</td>
                    <td>{residenceAddress}</td>
                </tr>
                <tr>
                    <td>Adres stałego miejsca prowadzenia działalności albo adres miejsca zamieszkania,
                        w przypadku braku adresu stałego miejsca prowadzenia działalności
                        - w odniesieniu do osoby fizycznej
                    </td>
                    <td>{workingAddress}</td>
                </tr>
                <tr>
                    <td>Imiona i nazwiska prokurentów oraz ich numery identyfikacji
                        podatkowej lub numery PESEL
                    </td>
                    <td>{representatives.map((value, index) => <p key={index}>
                        <span>{value.companyName}</span><span>{value.firstName}</span>
                        <span>{value.lastName}</span><span>{value.nip}</span>
                        <span>{value.pesel || '-'}</span></p>)}</td>
                </tr>
                <tr>
                    <td>Imiona i nazwiska osób wchodzących w skład organu uprawnionego do reprezentowania
                        podmiotu oraz ich numery identyfikacji podatkowej lub numery PESEL
                    </td>
                    <td>{authorizedClerks.map((value, index) => <p key={index}>
                        <span>{value.companyName}</span><span>{value.firstName}</span>
                        <span>{value.lastName}</span><span>{value.nip}</span>
                        <span>{value.pesel || '-'}</span></p>)}</td>
                </tr>
                <tr>
                    <td>Imię i nazwisko lub firma (nazwa) wspólnika oraz jego numer identyfikacji
                        podatkowej lub numer PESEL
                    </td>
                    <td>{partners.map((value, index) => <p key={index}>
                        <span>{value.companyName}</span><span>{value.firstName}</span>
                        <span>{value.lastName}</span><span>{value.nip}</span>
                        <span>{value.pesel || '-'}</span></p>)}</td>
                </tr>
                <tr>
                    <td>Numery rachunków rozliczeniowych lub imiennych rachunków w SKOK</td>
                    <td>{accountNumbers.map((value, index) => <p key={index}>{value}</p>)}</td>
                </tr>
                <tr>
                    <td>Podmiot może posiadać inne rachunki bankowe, które są przyporządkowane do
                        rachunków wyświetlonych w wykazie
                    </td>
                    <td>{hasVirtualAccounts}</td>
                </tr>
                <tr>
                    <td>Data rejestracji jako podatnika VAT</td>
                    <td>{registrationLegalDate}</td>
                </tr>
                <tr>
                    <td><p>Data odmowy rejestracji jako podatnika VAT</p>
                        <p>Podstawa prawna odmowy rejestracji</p></td>
                    <td><p>{registrationDenialBasis}</p><p>{registrationDenialDate}</p></td>
                </tr>
                <tr>
                    <td><p>Data wykreślenia rejestracji jako podatnika VAT</p>
                        <p>Podstawa prawna wykreślenia</p></td>
                    <td><p>{removalDate}</p><p>{removalBasis}</p></td>
                </tr>
                <tr>
                    <td><p>Data przywrócenia rejestracji jako podatnika VAT</p>
                        <p>Podstawa prawna przywrócenia</p></td>
                    <td><p>{restorationDate}</p><p>{restorationBasis}</p></td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={2}>Identyfikator wyszukiwania: {requestId}</td>
                </tr>
                </tfoot>
            </table>
        </div>
    )
};

export default ServerAnswer;