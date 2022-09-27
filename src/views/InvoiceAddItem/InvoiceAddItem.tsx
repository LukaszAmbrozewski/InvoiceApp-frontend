import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";

export const InvoiceAddItem = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Dodaj fakturę'/>
            <SecondHeader secondHeaderText='Dodawanie pozycji do faktury'></SecondHeader>
            <div>Formularz dodawania nowej pozycji do faktury...</div>
            <Footer/>
        </nav>
    )
}