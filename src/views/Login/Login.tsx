import React from 'react';
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {LoginBox} from "../../components/LoginBox/LoginBox";


export const Login = () => {

    return (
        <nav className="views">
            <SecondHeader secondHeaderText='Zaloguj się'></SecondHeader>
            <LoginBox/>
        </nav>
    )
}