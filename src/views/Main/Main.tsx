import React from 'react';
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {MainMenuBox} from "../../components/MainMenuBox/MainMenuBox";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";

export const Main = () => {
    return (
        <nav className="views">
            <Header mainHeaderText='Strona główna'/>
            <SecondHeader secondHeaderText='Zarządzaj swoimi fakturami'></SecondHeader>
            <MainMenuBox/>
            <Footer/>
        </nav>
    )
}