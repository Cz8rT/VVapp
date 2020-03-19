import React from "react";

const RegonNumberInput = ({input, meta, placeholder, regonNumberHandler}) => {
    return (
        <div className={`bankAcc ${meta.active ? 'activeInput' : ""}`}>
            <label className={'bankAccL'}>Numer REGON:</label>
            <input {...input}
                   placeholder={placeholder}
                   id={'regonNr'}
                   maxLength={14}
                   onChange={regonNumberHandler}/>
            {meta.error && meta.touched &&
            <span className={'metaError'}>{meta.error}</span>}
        </div>
    )
};

export default RegonNumberInput;
