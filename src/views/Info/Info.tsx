import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";

export const Info = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Informacje'/>
            <SecondHeader secondHeaderText='Informacje o aplikacji'></SecondHeader>
            <div>Podstawowe dane o aplikacji autorze celu aplikacji linki linkedin...</div>
            <Footer/>
        </nav>
    )
}