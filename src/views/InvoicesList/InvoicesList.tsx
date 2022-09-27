import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";

export const InvoicesList = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Twoje faktury'/>
            <SecondHeader secondHeaderText='Lista twoich faktur'></SecondHeader>
            <div>Lista faktur...</div>
            <Footer/>
        </nav>
    )
}