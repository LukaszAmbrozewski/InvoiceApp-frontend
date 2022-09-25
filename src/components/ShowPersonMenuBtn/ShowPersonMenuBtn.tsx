import React, {useState} from 'react';
import PersonIcon from '@mui/icons-material/Person';

import './ShowPersonMenuBtn.css'

export const ShowPersonMenuBtn = () => {
    const [expand, setExpand] = useState(false)

    const changeVisibility = () => {
        expand ? setExpand(false) : setExpand(true);
    }

    return (
        <>
            {expand ? (
                <>
                    <div onClick={changeVisibility} className='person-icon-box'>
                        <PersonIcon className="person-icon"/>
                    </div>
                    <div className="person-menu">
                        <div className="person-menu-btn">Wyloguj</div>
                        <div className="person-menu-btn">Dane użytkownika</div>
                    </div>
                </>


                ) : (
                <div onClick={changeVisibility} className='person-icon-box'>
                <PersonIcon className="person-icon"/>
                </div>
                )}
        </>
    )
}