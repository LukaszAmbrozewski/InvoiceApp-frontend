import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";
import {InvoiceAddBox} from "../../components/InvoiceAddBox/InvoiceAddBox";

export const InvoiceAdd = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Dodaj fakturę'/>
            <SecondHeader secondHeaderText='Utwórz nową fakturę'></SecondHeader>
            <InvoiceAddBox/>
            <Footer/>
        </nav>
    )
}