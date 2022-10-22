import {apiUrl} from "../config/api";

export const getUserHistory = async () => {
    const res = await fetch(`${apiUrl}/history`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
}