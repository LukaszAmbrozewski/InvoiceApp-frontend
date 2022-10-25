import { apiUrl } from "../config/api";

export const getAllInvoices = async () => {
  const res = await fetch(`${apiUrl}/invoices`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};
