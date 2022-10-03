import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";
import {RegisterBox} from "../../components/RegisterBox/RegisterBox";

export const Register = () => {
    return (
        <nav className="views">
            <Header mainHeaderText='Strona rejestracji'/>
            <SecondHeader secondHeaderText='Zarejestruj się'></SecondHeader>
            <RegisterBox/>
            <Footer/>
        </nav>
    )
}