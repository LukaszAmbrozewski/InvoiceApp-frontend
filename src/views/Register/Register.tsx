import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";

export const Register = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Strona rejestracji'/>
            <SecondHeader secondHeaderText='Zarejestruj się'></SecondHeader>
            <div>Formularz rejestracji...</div>
            <Footer/>
        </nav>
    )
}