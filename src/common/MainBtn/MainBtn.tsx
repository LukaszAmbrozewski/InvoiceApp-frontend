import React, {MouseEventHandler} from 'react';
import {Link} from "react-router-dom";

import './MainBtn.css'

interface Props {
    text: string;
    to?: string;
    onClick?: MouseEventHandler;
}

export const MainBtn = (props: Props) => {
    return (
        props.to
            ? <div className="main-btn-box">
                <Link className="main-btn" onClick={props.onClick} to={props.to}>{props.text}</Link>
            </div>
            : <div className="main-btn-box">
                <button className="main-btn" type="button" onClick={props.onClick}>{props.text}</button>
            </div>
    )
}