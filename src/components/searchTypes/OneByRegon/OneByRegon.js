import React from "react";
import {Form, Field} from 'react-final-form';
import './oneByRegon.scss';
import RegonNumberInput from "../../Form/RegonNumberInput/RegonNumberInput";
import UserDateCheckbox from "../../Form/UserDateCheckbox/UserDateCheckbox";
import UserDateInput from "../../Form/UserDateInput/UserDateInput";

const OneByRegon = ({
                       typeReturn, answer, exactDate, regonNumber, userDate, setError,
                       ownDate, regonNumberHandler, handleCheck, hiddenClass, userDateHandler,
                       error, requiredData, requiredRegon
                   }) => {

    // Server GET on Form submit
    const onSubmit = () => {
        fetch(`https://wl-api.mf.gov.pl/api/search/regon/${regonNumber}?date=${userDate}`)
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
            <div className={'oneByRegon'}>
                <h4>Typ wyszukiwania: <strong>Numer REGON</strong></h4>
                <button className={'typeReturn'} onClick={typeReturn}>Zmień typ wyszukiwania</button>
            </div>
            {error === true &&
            <span className={'server_error'}>Coś poszło nie tak. Nie można odnaleźć servera.</span>}
            <Form onSubmit={onSubmit} subscription={{submitting: true}}>
                {({handleSubmit, submitting}) => (
                    <form onSubmit={handleSubmit}>
                        <Field name={'regonNrInput'}
                               placeholder={'Numer konta bankowego'}
                               validate={requiredRegon}
                               defaultValue={regonNumber}
                               regonNumberHandler={regonNumberHandler}
                               component={RegonNumberInput}/>
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

export default OneByRegon;