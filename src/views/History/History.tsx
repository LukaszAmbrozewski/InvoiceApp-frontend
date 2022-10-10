import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";

export const History = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Historia aktywności'/>
            <SecondHeader secondHeaderText='Twoja historia aktywności'></SecondHeader>
            <div>Lista aktywności...</div>
            <Footer/>
        </nav>
    )
}