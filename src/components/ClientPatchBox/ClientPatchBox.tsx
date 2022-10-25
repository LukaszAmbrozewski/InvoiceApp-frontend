import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneClient } from "../../utils/getOneClient";
import { Client } from "types";
import { ClientForm } from "../ClientForm/ClientForm";
import { isMobile } from "react-device-detect";
import { apiUrl } from "../../config/api";
import { Loading } from "../../common/Loading/Loading";
import { ConfirmBtn } from "../../common/ConfirmBtn/ConfirmBtn";
import "../ComponentsStyles.css";

export const ClientPatchBox = () => {
  const [clientData, setClientData] = useState<Client>();
  let param = useParams();
  const navigate = useNavigate();

  const getClientData = async () => {
    const data = await getOneClient(`${param.clientPatchId}`);
    setClientData(data);
  };

  useEffect(() => {
    getClientData();
  }, []);

  const patchClient = async (values: Client) => {
    const res = await fetch(`${apiUrl}/clients`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: values.id,
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
    response.isSuccess ? navigate("/clients-list") : navigate("/error");
  };

  return (
    <div className={isMobile ? "data-box-mobile" : "data-box"}>
      {clientData ? (
        <div className="form-box">
          <ClientForm
            sendForm={patchClient}
            initialValues={clientData}
            buttonText="Zatwierdź zmiany"
          />
          <ConfirmBtn text="Powrót do listy klientów" to="/clients-list" />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
