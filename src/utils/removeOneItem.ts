import {apiUrl} from "../config/api";

export const removeOneItem = async (itemId: string) => {
    await fetch(`${apiUrl}/items/${itemId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
}