import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";

export const InvoiceAdd = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Dodaj fakturę'/>
            <SecondHeader secondHeaderText='Utwórz nową fakturę'></SecondHeader>
            <div>Formularz pierwszego etapu dodawania faktury.</div>
            <Footer/>
        </nav>
    )
}