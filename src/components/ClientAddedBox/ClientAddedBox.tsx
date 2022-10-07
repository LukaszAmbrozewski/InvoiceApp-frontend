import React from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import './ClientAddedBox.css'
import '../ComponentsStyles.css'
import {ConfirmBtn} from "../../common/ConfirmBtn/ConfirmBtn";
import {isMobile} from "react-device-detect";

export const ClientAddedBox = () => {
    return (
        <div className={isMobile ? 'data-box-mobile' : 'data-box'}>
            <HowToRegIcon className='main-info-icon'/>
            <p className='main-info-text'>Dodawanie klienta przebiegło pomyślnie.</p>
            <ConfirmBtn to='/client-add' text='Dodaj kolejnego kontrahenta'/>
            <ConfirmBtn to='/main' text='Powrót do strony głównej'/>
            <ConfirmBtn to='/invoice-add' text='Dodaj nową fakturę'/>
        </div>
    )
}