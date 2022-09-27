import React from 'react';

import './HeaderMobile.css'
import {ShowPersonMenuBtn} from "../ShowPersonMenuBtn/ShowPersonMenuBtn";

interface Props{
    mainHeaderText: string;
}

export const HeaderMobile = (props: Props) => {
    return(
        <div className="header-mobile-box">
            <h1 className='mobile-main-header'>
                <div>{props.mainHeaderText}</div>
                <ShowPersonMenuBtn/>
            </h1>

        </div>
    )
}
