import React from "react";

const BankAccountInput = ({input, meta, placeholder, bankAccHandler}) => {
    return (
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
    )
};

export default BankAccountInput;

