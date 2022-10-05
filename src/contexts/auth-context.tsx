import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {UserData} from "types";
import {apiUrl} from "../config/api";

const initialState = {
    id: '',
    email: '',
    companyName: '',
    streetAddress: '',
    cityAndCode: '',
    nip: 0,
    regon: 0,
    phoneNumber: 0,
};

export const authContext = createContext<Partial<UserData>>({})
export default function AuthContext(props: PropsWithChildren<any>) {
    const [user, setUser] = useState<UserData>(initialState)
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${apiUrl}/user`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type' : 'application/json',
                },
            });
            const data = await res.json();
            data.id ? setUser(data) : setUser(initialState);
        }
        fetchData();
    }, [])
    return (
        <div>
            <authContext.Provider value={user!}>{props.children}</authContext.Provider>
        </div>
    )
}