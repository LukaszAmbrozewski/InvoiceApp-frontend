import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";

export const UserPatch = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Edytuj dane'/>
            <SecondHeader secondHeaderText='Edytuj dane swojej firmy'></SecondHeader>
            <div>Formularz edycji danych firmy</div>
            <Footer/>
        </nav>
    )
}