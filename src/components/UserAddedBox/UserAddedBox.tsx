import React from 'react';
import {MainBtn} from "../../common/MainBtn/MainBtn";
import '../ComponentsStyles.css'
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const UserAddedBox = () => {
    return (
        <div className='main-info-box'>
            <HowToRegIcon className='main-info-icon'/>
            <p className='main-info-text'>Rejestracja przebiegła pomyślnie. Zaloguj się by móc korzystać z aplikacji.</p>
            <MainBtn to='/login' text='Zaloguj się'></MainBtn>
        </div>
    )
}