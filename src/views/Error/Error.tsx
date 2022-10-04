import React from 'react';
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {ErrorBox} from "../../components/ErrorBox/ErrorBox";


export const Error = () => {
    return (
        <nav className="views">
            <Header mainHeaderText='Błąd aplikacji'/>
            <SecondHeader secondHeaderText='Wystąpił błąd aplikacji'></SecondHeader>
            <ErrorBox/>
            <Footer/>
        </nav>
    )
}