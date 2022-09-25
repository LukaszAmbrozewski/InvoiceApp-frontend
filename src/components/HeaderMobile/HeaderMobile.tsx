import React from 'react';

import './HeaderMobile.css'
import {ShowPersonMenuBtn} from "../ShowPersonMenuBtn/ShowPersonMenuBtn";

interface Props{
    mainHeaderText: string;
    secondHeaderText: string;
}

export const HeaderMobile = (props: Props) => {
    return(
        <div className="header-mobile-box">
            <h1 className='mobile-main-header'>
                <div>{props.mainHeaderText}</div>
                <ShowPersonMenuBtn/>
            </h1>
            <h2 className="mobile-second-header">{props.secondHeaderText}</h2>
        </div>
    )
}
