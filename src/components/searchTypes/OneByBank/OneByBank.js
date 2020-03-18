import React, {useEffect, useState} from "react";
import {Form, Field} from 'react-final-form';
import './oneByBank.scss';

const bankAccount = '94814522512683789765158332';

// Current date
const date = new Date();
let exactDate = `${date.getFullYear()}-${date.getMonth() < 9 ? '0' +
    (date.getMonth() + 1) : date.getMonth()}-${date.getDate() < 10 ? '0' +
    date.getDate() : date.getDate()}`;

const OneByBank = ({typeReturn}) => {
    const [error, setError] = useState(false);
    const [ownDate, setOwnDate] = useState(false);

    // Own date checkbox check
    const handleCheck = () => {
        setOwnDate(!ownDate);
    };

    const hiddenClass = ownDate ? "" : "hideData";

    // Server GET on Form submit
    const onSubmit = () => {
        fetch(`https://wl-test.mf.gov.pl/api/search/bank-account/${bankAccount}?date=${exactDate}`)
            .then((res) => {
                setError(false);
                return res.json();
            }).then(res => console.log(res))
            .catch(() => {
                setError(true);
            });
    };

    const required = (value) => (value ? undefined : "Wymagane");

    return (
        <section className={'searchOption'}>
            <div className={'oneByBank'}>
                <h4>Typ wyszukiwania: <strong>Konto bankowe</strong></h4>
                <button className={'typeReturn'} onClick={typeReturn}>Zmień typ wyszukiwania</button>
            </div>
            {error === true &&
            <span className={'server_error'}>Coś poszło nie tak. Nie można odnaleźć servera.</span>}
            <Form onSubmit={onSubmit}>
                {({handleSubmit, submitting, values}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={'bankAcc'}>
                            <label className={'bankAccL'}>Numer konta bankowego:</label>
                            <Field id={'bankAccNr'} name={'bankAccNr'}
                                   component={"input"}
                                   placeholder={'Numer konta bankowego'}
                            />
                        </div>
                        <p>Data: <span>{exactDate}</span></p>
                        <div className={'ownDateDiv'}>
                            <label>Podaj własną datę</label>
                            <Field className={'ownDateCheckbox'} name={'ownDate'}
                                   component={"input"}
                                   type={'checkbox'}
                                   checked={ownDate}
                                   onChange={handleCheck}
                            />
                        </div>
                        <div className={hiddenClass}>
                            <div>
                                <label>Data:</label>
                                <Field id={'userDate'} name={'userDate'}
                                       component={"input"}
                                       type={'date'}
                                />
                            </div>
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