import React from 'react';

import './Header.css'
import {ShowPersonMenuBtn} from "../ShowPersonMenuBtn/ShowPersonMenuBtn";

interface Props{
    mainHeaderText: string;
}

export const Header = (props: Props) => {
    return(
        <div className="header-mobile-box">
            <h1 className='mobile-main-header'>
                <div>{props.mainHeaderText}</div>
                <ShowPersonMenuBtn/>
            </h1>

        </div>
    )
}
