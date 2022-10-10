import {apiUrl} from "../config/api";

export const getOneClient = async (clientId: string) => {

    const res = await fetch(`${apiUrl}/clients/${clientId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
}