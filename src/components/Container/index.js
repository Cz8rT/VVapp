import React from "react";
import './style/style.scss'
import '../../stylePartials/_reset.scss'
import '../../stylePartials/_variables.scss'

const Container = (props) => {
    return (
        <div className={'window'}>
            <div className={'container'}>
                {props.children}
            </div>
        </div>
    )
};

export default Container;