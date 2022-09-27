import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";

export const ClientAdded = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Dodaj kontrahenta'/>
            <SecondHeader secondHeaderText='Dodano nowego kontrahenta'></SecondHeader>
            <div>Dodałeś właśnie nowego klienta o nazwie...</div>
            <Footer/>
        </nav>
    )
}