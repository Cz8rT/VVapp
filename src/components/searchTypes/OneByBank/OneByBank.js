import React, {useState} from "react";
import {Form, Field} from 'react-final-form';
import './oneByBank.scss';

// Current date
const date = new Date();
let exactDate = `${date.getFullYear()}-${date.getMonth() < 9 ? '0' +
    (date.getMonth() + 1) : date.getMonth()}-${date.getDate() < 10 ? '0' +
    date.getDate() : date.getDate()}`;

const OneByBank = ({typeReturn, answer}) => {
    const [error, setError] = useState(false);
    const [ownDate, setOwnDate] = useState(false);
    const [userDate, setUserDate] = useState(exactDate);
    const [bankAccount, setBankAccount] = useState("");

    // Own date checkbox check
    const handleCheck = () => {
        setOwnDate(!ownDate);
        if ((userDate > exactDate && ownDate === true) || userDate === "") {
            setUserDate(exactDate);
        }
    };

    const hiddenClass = ownDate ? "" : "hideData";

    // saving userDate in useState
    const userDateHandler = (event) => {
        setUserDate(event.target.value)
    };

    // saving value of bankAccount input in useState
    const bankAccHandler = (event) => {
        setBankAccount(event.target.value)
    };

    // Server GET on Form submit
    const onSubmit = () => {
        fetch(`https://wl-test.mf.gov.pl/api/search/bank-account/${bankAccount}?date=${userDate}`)
            .then((res) => {
                setError(false);
                return res.json();
            }).then(res => answer(res))
            .catch(() => {
                setError(true);
            });
    };

    // Requirements for the input bankAccount
    const required = (value) => {
        if (value.length === 0) {
            return "wymagane";
        } else if (value.length < 26 || isNaN(value)) {
            return "Podaj poprawny numer konta"
        } else {
            return undefined;
        }
    };

    // Requirements for the user Date
    const requiredData = (value) => {
        if (value > exactDate && ownDate === true) {
            return "Data nie może być datą przyszłą";
        } else if (userDate === "") {
            return "Wprowadzona data jest błędna";
        } else {
            return undefined;
        }
    };


    return (
        <section className={'searchOption'}>
            <div className={'oneByBank'}>
                <h4>Typ wyszukiwania: <strong>Konto bankowe</strong></h4>
                <button className={'typeReturn'} onClick={typeReturn}>Zmień typ wyszukiwania</button>
            </div>
            {error === true &&
            <span className={'server_error'}>Coś poszło nie tak. Nie można odnaleźć servera.</span>}
            <Form onSubmit={onSubmit} subscription={{submitting: true}}>
                {({handleSubmit, submitting, values}) => (
                    <form onSubmit={handleSubmit}>

                        <Field name={'bankAccNr'}
                               placeholder={'Numer konta bankowego'}
                               validate={required}
                               defaultValue={bankAccount}>
                            {({input, meta, placeholder}) => (
                                <div className={`bankAcc ${meta.active ? 'activeInput' : ""}`}>
                                    <label className={'bankAccL'}>Numer konta bankowego:</label>
                                    <input {...input}
                                           placeholder={placeholder}
                                           id={'bankAccNr'}
                                           maxLength={26}
                                           onChange={bankAccHandler}/>
                                    {meta.error && meta.touched &&
                                    <span className={'metaError'}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <p>Data: <span>{ownDate ? userDate : exactDate}</span></p>
                        <div className={'ownDateDiv'}>
                            <label>Podaj własną datę</label>
                            <Field className={'ownDateCheckbox'} name={'ownDate'}
                                   component={"input"}
                                   type={'checkbox'}
                                   checked={ownDate}
                                   onChange={handleCheck}/>
                        </div>
                        <div className={hiddenClass}>
                            <Field name={'userDate'}
                                   component={"input"}
                                   type={'date'}
                                   defaultValue={userDate}
                                   validate={requiredData}>
                                {({input, meta}) => (
                                    <div>
                                        <label>Data:</label>
                                        <input {...input}
                                               id={'userDate'}
                                               onChange={userDateHandler}/>
                                        {meta.error && meta.invalid &&
                                        <span className={'metaError'}>{meta.error}</span>}
                                    </div>)}</Field>
                        </div>
                        <button type="submit" disabled={submitting}>Wyślij</button>
                        <pre>{JSON.stringify(values, undefined, 2)}</pre>
                    </form>
                )}
            </Form>
        </section>
    )
};

export default OneByBank;