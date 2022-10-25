import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";
import {StatisticsBox} from "../../components/StatisticsBox/StatisticsBox";

export const Statistics = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Statystyki'/>
            <SecondHeader secondHeaderText='Twoje statystyki'></SecondHeader>
            <StatisticsBox/>
            <Footer/>
        </nav>
    )
}