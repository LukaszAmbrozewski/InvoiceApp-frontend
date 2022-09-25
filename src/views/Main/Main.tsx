import React from 'react';
import {HeaderMobile} from "../../components/HeaderMobile/HeaderMobile";
import {Footer} from "../../components/Footer/Footer";
import {MainMenuBox} from "../../components/MainMenuBox/MainMenuBox";
import './Main.css'

export const Main = () => {
    return (
        <nav className="main">
            <HeaderMobile mainHeaderText='Strona główna' secondHeaderText='Zarządzaj swoimi fakturami'/>
            <MainMenuBox/>
            <Footer/>
        </nav>
    )
}