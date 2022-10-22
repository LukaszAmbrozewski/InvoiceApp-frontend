import {apiUrl} from "../config/api";

export const getOneInvoice = async (invoiceId: string) => {

    const res = await fetch(`${apiUrl}/invoices/${invoiceId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    return await res.json();
}

