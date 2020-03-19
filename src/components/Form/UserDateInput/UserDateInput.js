import React from "react";

const UserDateInput = ({input, meta, userDateHandler,}) => {
    return (
        <div>
            <label>Data:</label>
            <input {...input}
                   id={'userDate'}
                   onChange={userDateHandler}/>
            {meta.error && meta.invalid &&
            <span className={'metaError'}>{meta.error}</span>}
        </div>
    )
};

export default UserDateInput;
