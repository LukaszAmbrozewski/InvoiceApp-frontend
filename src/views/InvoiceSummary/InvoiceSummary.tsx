import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";

export const InvoiceSummary = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Podsumowanie'/>
            <SecondHeader secondHeaderText='Podsumowanie faktury'></SecondHeader>
            <div>Podsumowanie faktury oraz wszystkie produkty z faktury.</div>
            <Footer/>
        </nav>
    )
}