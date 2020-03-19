import React from "react";
import {Form, Field} from 'react-final-form';
import './oneByNip.scss';
import UserDateCheckbox from "../../Form/UserDateCheckbox/UserDateCheckbox";
import UserDateInput from "../../Form/UserDateInput/UserDateInput";
import NipNumberInput from "../../Form/NipNumberInput/NipNumberInput";

const OneByNip = ({
                       typeReturn, answer, exactDate, nipNumber, userDate, setError,
                       ownDate, nipNumberHandler, handleCheck, hiddenClass, userDateHandler,
                       error, requiredData, requiredNip
                   }) => {

    // Server GET on Form submit
    const onSubmit = () => {
        fetch(`https://wl-test.mf.gov.pl//api/search/nip/${nipNumber}?date=${userDate}`)
            .then((res) => {
                setError(false);
                return res.json();
            }).then(res => answer(res))
            .catch(() => {
                setError(true);
            });
    };

    return (
        <section className={'searchOption'}>
            <div className={'oneByNip'}>
                <h4>Typ wyszukiwania: <strong>Numer NIP</strong></h4>
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

export default OneByNip;

// https://wl-api.mf.gov.pl/
// https://wl-test.mf.gov.pl
// 1100534799