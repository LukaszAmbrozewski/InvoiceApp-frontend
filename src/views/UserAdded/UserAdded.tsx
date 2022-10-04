import React from 'react';
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {UserAddedBox} from "../../components/UserAddedBox/UserAddedBox";

export const UserAdded = () => {
    return (
        <nav className="views">
            <Header mainHeaderText='Rejestracja użytkownika'/>
            <SecondHeader secondHeaderText='Zarejestrowano nowego użytkownika'></SecondHeader>
            <UserAddedBox/>
            <Footer/>
        </nav>
    )
}