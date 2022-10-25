import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client } from "types";
import { apiUrl } from "../../config/api";
import "./ClientAddBox.css";
import "../ComponentsStyles.css";
import { ClientForm } from "../ClientForm/ClientForm";
import { isMobile } from "react-device-detect";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const initialValues = {
  id: "",
  userId: "",
  companyName: "",
  streetAddress: "",
  cityAndCode: "",
  nip: undefined,
  regon: undefined,
  phoneNumber: undefined,
  email: "",
};

export const ClientAddBox = () => {
  const [addedError, setAddedError] = useState<boolean>(false);
  const navigate = useNavigate();
  const addClient = async (values: Client) => {
    const res = await fetch(`${apiUrl}/clients`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName: values.companyName,
        streetAddress: values.streetAddress,
        cityAndCode: values.cityAndCode,
        nip: values.nip,
        regon: values.regon,
        email: values.email,
        phoneNumber: values.phoneNumber,
      }),
    });

    const response = await res.json();
    if (response.isSuccess) {
      navigate("/client-added");
    } else if (response.error === "Client is already exist!") {
      setAddedError(true);
    } else {
      navigate("/error");
    }
  };

  return (
    <div className={isMobile ? "data-box-mobile" : "data-box"}>
      {addedError ? (
        <div className="client-add-failed">
          <ErrorOutlineIcon className="client-add-failed-icon" />
          <p>
            Użytkownik o podanym numerze NIP istnieje już w Twojej bazie
            klientów.
          </p>
        </div>
      ) : null}
      <ClientForm
        sendForm={addClient}
        initialValues={initialValues}
        buttonText="Dodaj"
      />
    </div>
  );
};
