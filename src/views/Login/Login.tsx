import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";
import {LoginBox} from "../../components/LoginBox/LoginBox";


export const Login = () => {

    return (
        <nav className="views">
            <Header mainHeaderText='Strona logowania'/>
            <SecondHeader secondHeaderText='Zaloguj się'></SecondHeader>
            <LoginBox/>
            <Footer/>
        </nav>
    )
}