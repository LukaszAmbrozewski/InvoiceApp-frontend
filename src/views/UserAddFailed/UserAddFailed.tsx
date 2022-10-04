import React from 'react';
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {UserAddFailedBox} from "../../components/UserAddFailedBox/UserAddFailedBox";


export const UserAddFailed = () => {
    return (
        <nav className="views">
            <Header mainHeaderText='Rejestracja użytkownika'/>
            <SecondHeader secondHeaderText='Problem z rejestracją'></SecondHeader>
            <UserAddFailedBox/>
            <Footer/>
        </nav>
    )
}