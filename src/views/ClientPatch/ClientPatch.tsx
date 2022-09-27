import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";

export const ClientPatch = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Edytuj dane'/>
            <SecondHeader secondHeaderText='Edytuj dane swojego kontrahenta'></SecondHeader>
            <div>Formularz edycji danych kontrahenta.</div>
            <Footer/>
        </nav>
    )
}