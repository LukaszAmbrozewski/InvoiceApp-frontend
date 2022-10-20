import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";
import {InvoicePaymentBox} from "../../components/InvoicePaymentBox/InvoicePaymentBox";

export const InvoicePayment = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Dodaj fakturę'/>
            <SecondHeader secondHeaderText='Płatności'></SecondHeader>
            <InvoicePaymentBox/>
            <Footer/>
        </nav>
    )
}