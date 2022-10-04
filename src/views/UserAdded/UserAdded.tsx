import React from 'react';
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {MainBtn} from "../../common/MainBtn/MainBtn";
import './UserAdded.css'

export const UserAdded = () => {
    return (
        <nav className="views">
            <Header mainHeaderText='Rejestracja użytkownika'/>
            <SecondHeader secondHeaderText='Zarejestrowano nowego użytkownika'></SecondHeader>
            <div className='user-added-box'>
                <p className='user-added-text'>Rejestracja przebiegła pomyślnie. Zaloguj się by móc korzystać z aplikacji.</p>
                <MainBtn to='/login' text='Zaloguj się'></MainBtn>
            </div>
            <Footer/>
        </nav>
    )
}