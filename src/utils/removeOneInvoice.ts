import { apiUrl } from "../config/api";

export const removeOneInvoice = async (invoiceId: string) => {
  await fetch(`${apiUrl}/invoices/${invoiceId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
