import React from 'react';
import {HeaderMobile} from "../../components/HeaderMobile/HeaderMobile";
import {Footer} from "../../components/Footer/Footer";
import {MainMenuBox} from "../../components/MainMenuBox/MainMenuBox";
import './Main.css'
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";

export const Main = () => {
    return (
        <nav className="main">
            <HeaderMobile mainHeaderText='Strona główna'/>
            <SecondHeader secondHeaderText='Zarządzaj swoimi fakturami'></SecondHeader>
            <MainMenuBox/>
            <Footer/>
        </nav>
    )
}