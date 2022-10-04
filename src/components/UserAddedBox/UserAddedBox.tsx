import React from 'react';
import {MainBtn} from "../../common/MainBtn/MainBtn";
import './UserAddedBox.css'
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const UserAddedBox = () => {
    return (
        <div className='user-added-box'>
            <HowToRegIcon className='user-added-icon'/>
            <p className='user-added-text'>Rejestracja przebiegła pomyślnie. Zaloguj się by móc korzystać z aplikacji.</p>
            <MainBtn to='/login' text='Zaloguj się'></MainBtn>
        </div>
    )
}