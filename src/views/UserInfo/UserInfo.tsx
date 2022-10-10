import React from 'react';
import {Header} from "../../components/Header/Header";
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {Footer} from "../../components/Footer/Footer";
import {UserInfoBox} from "../../components/UserInfoBox/UserInfoBox";

export const UserInfo = () => {
    return(
        <nav className="views">
            <Header mainHeaderText='Dane użytkownika'/>
            <SecondHeader secondHeaderText='Wszystkie dane użytkownika'></SecondHeader>
            <UserInfoBox/>
            <Footer/>
        </nav>
    )
}