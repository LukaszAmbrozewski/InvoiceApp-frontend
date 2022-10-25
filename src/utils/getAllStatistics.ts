import { apiUrl } from "../config/api";

export const getAllStatistics = async () => {
  const now = new Date();
  const today = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`;

  const res = await fetch(`${apiUrl}/stats`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      startingDate: "2010.01.01",
      endingDate: today,
    }),
  });

  return await res.json();
};
