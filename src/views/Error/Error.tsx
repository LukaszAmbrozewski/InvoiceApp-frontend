import React from 'react';
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {ErrorBox} from "../../components/ErrorBox/ErrorBox";

export const Error = () => {
    return (
        <nav className="views">
            <SecondHeader secondHeaderText='Wystąpił błąd aplikacji'></SecondHeader>
            <ErrorBox/>
        </nav>
    )
}