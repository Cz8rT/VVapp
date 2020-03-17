import React from "react";
import OneByNip from "../../components/searchTypes/OnebyNip/OneByNip";
import './styleSearch.scss'

const Search = () => {

    return (
        <section>
            <h2>Typ wyszukiwania:</h2>
            <div className={'typeOfGet'}>
                <div className={'typeSearch'}>
                    <h3>Metoda pełna <strong>"search"</strong></h3>
                    <div className={'btn_container'}>
                        <div className={'row_1'}>
                            <button>Konto bankowe</button>
                            <button>Lista kont bankowych</button>
                            <button>NIP</button>
                        </div>
                        <div className={'row_2'}>
                            <button>Lista numerów NIP</button>
                            <button>REGON</button>
                            <button>Lista numerów REGON</button>
                        </div>
                    </div>
                </div>
                <div className={'typeCheck'}>
                    <h3>Metoda uproszczona <strong>"check"</strong></h3>
                    <div className={'btn_container'}>
                        <button>NIP + konto bankowe</button>
                        <button>REGON + konto bankowe</button>
                    </div>
                </div>
            </div>
            <OneByNip/>
        </section>
    )
};

export default Search;