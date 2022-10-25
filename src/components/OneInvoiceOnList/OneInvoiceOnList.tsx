import React, { useEffect, useState } from "react";
import { Invoice, Client } from "types";
import { getOneClient } from "../../utils/getOneClient";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import "./OneInvoiceOnList.css";
import "../ComponentsStyles.css";
import { useNavigate } from "react-router-dom";
import { removeOneInvoice } from "../../utils/removeOneInvoice";

interface Props {
  invoice: Invoice;
  getInvoices: () => void;
}

export const OneInvoiceOnList = (props: Props) => {
  const [client, setClient] = useState<Client>();
  const navigate = useNavigate();

  const getClient = async () => {
    const clientData = await getOneClient(props.invoice.clientId);
    setClient(clientData);
  };

  const showInvoice = (invoiceId: string) => {
    navigate(`/invoice-summary/${invoiceId}`);
  };

  const removeInvoice = async (invoiceId: string) => {
    await removeOneInvoice(invoiceId);
    props.getInvoices();
    await getClient();
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <div className="one-invoice-box">
      {client ? (
        <>
          <div className="invoice-main-info-box">
            <p>{props.invoice.invoiceNumber}</p>
            <p>{props.invoice.creationDate}</p>
            <p>{`${props.invoice.grossValueOfEntireInvoice.toFixed(2)} zł`}</p>
          </div>
          <div className="invoice-main-info-box invoice-modify-box">
            <p className="invoice-description-text">{client.companyName}</p>
            <div className="icon-box">
              <div
                className="invoice-icon"
                onClick={() => showInvoice(props.invoice.id)}
              >
                <VisibilityIcon />
              </div>
              <div
                className="invoice-icon invoice-delete-icon"
                onClick={() => removeInvoice(props.invoice.id)}
              >
                <DeleteIcon />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
