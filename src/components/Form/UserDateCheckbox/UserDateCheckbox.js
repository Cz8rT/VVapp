import {Field} from "react-final-form";
import React from "react";

const UserDateCheckbox = ({ownDate, handleCheck}) => {
    return (
        <div className={'ownDateDiv'}>
            <label>Podaj własną datę</label>
            <Field className={'ownDateCheckbox'} name={'ownDate'}
                   component={"input"}
                   type={'checkbox'}
                   checked={ownDate}
                   onChange={handleCheck}/>
        </div>
    )
};

export default UserDateCheckbox;