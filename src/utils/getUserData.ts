import {apiUrl} from "../config/api";

export const getUserData = async () => {
    const res = await fetch(`${apiUrl}/user`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
}