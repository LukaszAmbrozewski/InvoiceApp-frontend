import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";

export const InvoicePayment = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Dodaj fakturę'/>
            <SecondHeader secondHeaderText='Płatności'></SecondHeader>
            <div>Formularz wyboru sposobu płatności...</div>
            <Footer/>
        </nav>
    )
}