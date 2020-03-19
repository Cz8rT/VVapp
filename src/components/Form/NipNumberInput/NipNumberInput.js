import React from "react";

const NipNumberInput = ({input, meta, placeholder, nipNumberHandler}) => {
    return (
        <div className={`nipNumber ${meta.active ? 'activeInput' : ""}`}>
            <label className={'nipNumberL'}>Numer NIP:</label>
            <input {...input}
                   placeholder={placeholder}
                   id={'nipNumber'}
                   maxLength={10}
                   onChange={nipNumberHandler}/>
            {meta.error && meta.touched &&
            <span className={'metaError'}>{meta.error}</span>}
        </div>
    )
};

export default NipNumberInput;