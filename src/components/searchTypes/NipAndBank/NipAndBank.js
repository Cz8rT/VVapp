import React from "react";
import {Form, Field} from 'react-final-form';
import './NipAndBank.scss';
import BankAccountInput from "../../Form/BankAccountInput/BankAccountInput";
import UserDateCheckbox from "../../Form/UserDateCheckbox/UserDateCheckbox";
import UserDateInput from "../../Form/UserDateInput/UserDateInput";
import NipNumberInput from "../../Form/NipNumberInput/NipNumberInput";

const NipAndBank = ({
                       typeReturn, answerShort, exactDate, bankAccount, userDate, setError,
                       ownDate, bankAccHandler, handleCheck, hiddenClass, userDateHandler,
                       error, requiredData, required, nipNumber, requiredNip, nipNumberHandler
                   }) => {

    // Server GET on Form submit
    const onSubmit = () => {
        fetch(`https://wl-api.mf.gov.pl//api/check/nip/${nipNumber}/bank-account/${bankAccount}?date=${userDate}`)
            .then((res) => {
                setError(false);
                return res.json();
            }).then(res => answerShort(res))
            .catch(() => {
                setError(true);
            });
    };

    return (
        <section className={'searchOption'}>
            <div className={'oneByBank'}>
                <h4>Typ wyszukiwania: <strong>NIP + Konto bankowe</strong></h4>
                <button className={'typeReturn'} onClick={typeReturn}>Zmień typ wyszukiwania</button>
            </div>
            {error === true &&
            <span className={'server_error'}>Coś poszło nie tak. Nie można odnaleźć servera.</span>}
            <Form onSubmit={onSubmit} subscription={{submitting: true}}>
                {({handleSubmit, submitting}) => (
                    <form onSubmit={handleSubmit}>
                        <Field name={'nipNumber'}
                               placeholder={'Numer NIP'}
                               validate={requiredNip}
                               defaultValue={nipNumber}
                               nipNumberHandler={nipNumberHandler}
                               component={NipNumberInput}/>
                        <Field name={'bankAccNr'}
                               placeholder={'Numer konta bankowego'}
                               validate={required}
                               defaultValue={bankAccount}
                               bankAccHandler={bankAccHandler}
                               component={BankAccountInput}/>
                        <p>Data: <span>{ownDate ? userDate : exactDate}</span></p>
                        <UserDateCheckbox handleCheck={handleCheck} ownDate={ownDate}/>
                        <div className={hiddenClass}>
                            <Field name={'userDate'}
                                   component={UserDateInput}
                                   type={'date'}
                                   defaultValue={userDate}
                                   validate={requiredData}
                                   userDateHandler={userDateHandler}/>
                        </div>
                        <button type="submit" disabled={submitting}>Wyślij</button>
                    </form>
                )}
            </Form>
        </section>
    )
};

export default NipAndBank;