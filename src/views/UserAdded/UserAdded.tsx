import React from 'react';
import {SecondHeader} from "../../components/SecondHeader/SecondHeader";
import {UserAddedBox} from "../../components/UserAddedBox/UserAddedBox";

export const UserAdded = () => {
    return (
        <nav className="views">
            <SecondHeader secondHeaderText='Zarejestrowano nowego użytkownika'></SecondHeader>
            <UserAddedBox/>
        </nav>
    )
}