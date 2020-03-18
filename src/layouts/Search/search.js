import React, {useState} from "react";
import Buttons from "../../components/Buttons/Buttons";
import OneByBank from "../../components/searchTypes/OneByBank/OneByBank";
import OneByNip from "../../components/searchTypes/OnebyNip/OneByNip";
import './styleSearch.scss';
import '../../components/searchTypes/searchTypes.scss';

const Search = () => {
    const [searchType, setSearchType] = useState(0);
    const [answer, setAnswer] = useState(null);

    // Return to type of search choosing
    const typeReturnHandler = () => {
        setSearchType(0);
    };

    // Show chosen type of search form
    const typeSearchHandler = (event) => {
        setSearchType(+event.target.value);
    };

    // Saving server downloaded data in useState
    const serverHandler = (value) => {
      setAnswer(value)
    };
    console.log(answer);
    return (
        <main>
            {searchType === 0 && <Buttons typeSearch={typeSearchHandler}/>}
            {searchType === 1 && <OneByBank typeReturn={typeReturnHandler} answer={serverHandler}/>}
            {searchType === 3 && <OneByNip typeReturn={typeReturnHandler}/>}
        </main>
    )
};

export default Search;