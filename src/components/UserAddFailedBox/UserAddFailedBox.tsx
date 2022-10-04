import React from 'react';
import {MainBtn} from "../../common/MainBtn/MainBtn";
import '../ComponentsStyles.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const UserAddFailedBox = () => {
    return (
        <div className='user-added-box'>
            <ErrorOutlineIcon className='user-added-icon'/>
            <p className='user-added-text'>Podany adres email jest już zajęty. Spróbuj ponownie wykorzystując inny adres email.</p>
            <MainBtn to='/register' text='Spróbuj ponownie'></MainBtn>
        </div>
    )
}