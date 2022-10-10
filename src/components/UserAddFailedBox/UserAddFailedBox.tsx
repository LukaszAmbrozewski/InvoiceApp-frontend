import React from 'react';
import {MainBtn} from "../../common/MainBtn/MainBtn";
import '../ComponentsStyles.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const UserAddFailedBox = () => {
    return (
        <div className='main-info-box'>
            <ErrorOutlineIcon className='main-info-icon'/>
            <p className='main-info-text'>Podany adres email jest już zajęty. Spróbuj ponownie wykorzystując inny adres email.</p>
            <MainBtn to='/register' text='Spróbuj ponownie'></MainBtn>
        </div>
    )
}