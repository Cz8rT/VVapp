import React, {useState} from "react";
import Buttons from "../../components/Buttons/Buttons";
import OneByBank from "../../components/searchTypes/OneByBank/OneByBank";
import OneByNip from "../../components/searchTypes/OnebyNip/OneByNip";
import ServerAnswer from "../../components/ServerAnswer/ServerAnswer";
import ServerAnswerList from "../../components/ServerAnswer/ServerAnswerList";
import './styleSearch.scss';
import '../../components/searchTypes/searchTypes.scss';

// Current date
const date = new Date();
let exactDate = `${date.getFullYear()}-${date.getMonth() < 9 ? '0' +
    (date.getMonth() + 1) : date.getMonth()}-${date.getDate() < 10 ? '0' +
    date.getDate() : date.getDate()}`;

const Search = () => {
    const [searchType, setSearchType] = useState(0);
    const [ownDate, setOwnDate] = useState(false);
    const [error, setError] = useState(false);
    const [userDate, setUserDate] = useState(exactDate);
    const [bankAccount, setBankAccount] = useState("");
    const [nipNumber, setNipNumber] = useState("");
    const [answer, setAnswer] = useState(null);
    const [answerList, setAnswerList] = useState(null);

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

    // saving value of nipNumber input in useState
    const nipNumberHandler = (event) => {
        setNipNumber(event.target.value)
    };

    // Return to type of search choosing
    const typeReturnHandler = () => {
        setSearchType(0);
        setAnswer(null);
        setAnswerList(null);
    };

    // Show chosen type of search form
    const typeSearchHandler = (event) => {
        setSearchType(+event.target.value);
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

    // Requirements for the input nipNumber
    const requiredNip = (value) => {
        if (value.length === 0) {
            return "wymagane";
        } else if (value.length < 10 || isNaN(value)) {
            return "Podaj poprawny numer NIP"
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

    // Saving server downloaded data in useState
    const serverHandler = (value) => {
      setAnswer(value)
    };

    // Saving server downloaded data in list form in useState
    const serverHandlerList = (value) => {
        setAnswerList(value)
    };

    console.log(answer,answerList);

    // object to be spread as a Component props
    const conf = {
        typeReturn: typeReturnHandler,
        answer: serverHandler,
        answerList: serverHandlerList,
        exactDate: exactDate,
        bankAccount: bankAccount,
        nipNumber: nipNumber,
        userDate: userDate,
        setError: setError,
        ownDate: ownDate,
        bankAccHandler: bankAccHandler,
        nipNumberHandler: nipNumberHandler,
        handleCheck: handleCheck,
        hiddenClass: hiddenClass,
        userDateHandler: userDateHandler,
        error: error,
        requiredData: requiredData,
        required: required,
        requiredNip: requiredNip
    };

    return (
        <main>
            {searchType === 0 && <Buttons typeSearch={typeSearchHandler}/>}
            {searchType === 1 && <OneByBank {...conf} />}
            {searchType === 3 && <OneByNip {...conf}/>}
            {answer !== null && <ServerAnswer answer={answer}/>}
            {answerList !== null && <ServerAnswerList answer={answerList}/>}
        </main>
    )
};

export default Search;