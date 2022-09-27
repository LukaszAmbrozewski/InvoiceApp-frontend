import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";


export const Login = () => {

    return (
        <nav className="views">
            <Header mainHeaderText='Strona logowania'/>
            <SecondHeader secondHeaderText='Zaloguj się'></SecondHeader>
            <div>Formularz logowania</div>
            <Footer/>
        </nav>
    )
}