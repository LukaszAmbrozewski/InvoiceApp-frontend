import {apiUrl} from "../config/api";

export const getClients = async () => {

    const res = await fetch(`${apiUrl}/clients`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
}

