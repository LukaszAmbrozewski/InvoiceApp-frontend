import {apiUrl} from "../config/api";

export const getAllItemsForInvoice = async (invoiceId: string) => {

    const res = await fetch(`${apiUrl}/items/${invoiceId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
}

