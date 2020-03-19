import React from "react";

const Buttons = ({typeSearch}) => {
    return (
        <>
            <h2>Typ wyszukiwania:</h2>
            <div className={'typeOfGet'}>
                <div className={'typeSearch'}>
                    <h3>Metoda pełna <strong>"search"</strong></h3>
                    <div className={'btn_container'}>
                        <div className={'row_1'}>
                            <button onClick={typeSearch} value={1}>Konto bankowe</button>
                            <button>Lista kont bankowych</button>
                            <button onClick={typeSearch} value={3}>NIP</button>
                        </div>
                        <div className={'row_2'}>
                            <button>Lista numerów NIP</button>
                            <button onClick={typeSearch} value={5}>REGON</button>
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
        </>
    )
};

export default Buttons;