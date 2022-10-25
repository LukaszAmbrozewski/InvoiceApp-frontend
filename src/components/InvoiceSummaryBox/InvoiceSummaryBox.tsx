import React, { useEffect, useState } from "react";
import { getOneInvoice } from "../../utils/getOneInvoice";
import { useParams } from "react-router-dom";
import { getAllItemsForInvoice } from "../../utils/getAllItemsForInvoice";
import { Invoice, Item, Client } from "types";
import { getOneClient } from "../../utils/getOneClient";
import { Loading } from "../../common/Loading/Loading";
import { DataField } from "../../common/DataField/DataField";
import "../ComponentsStyles.css";
import { isMobile } from "react-device-detect";
import { OneProductOnInvoice } from "../OneProductOnInvoice/OneProductOnInvoice";
import { ConfirmBtn } from "../../common/ConfirmBtn/ConfirmBtn";

export const InvoiceSummaryBox = () => {
  const [invoice, setInvoice] = useState<Invoice>();
  const [items, setItems] = useState<Item[]>();
  const [client, setClient] = useState<Client>();

  let param = useParams();

  const getInvoiceData = async () => {
    if (param.invoiceId) {
      const invoiceData = await getOneInvoice(param.invoiceId);
      setInvoice(invoiceData);
      const items = await getAllItemsForInvoice(param.invoiceId);
      setItems(items);
      const client = await getOneClient(invoiceData.clientId);
      setClient(client);
    }
  };

  useEffect(() => {
    getInvoiceData();
  }, []);

  return (
    <div className={isMobile ? "data-box-mobile" : "data-box"}>
      {invoice && items && client ? (
        <>
          <DataField description="Numer faktury" text={invoice.invoiceNumber} />
          <DataField description="Nazwa firmy" text={client.companyName} />
          <DataField
            description="Data utworzenia faktury"
            text={invoice.creationDate}
          />
          <DataField
            description="Data wykonania usługi"
            text={invoice.dateOfService}
          />
          <DataField
            description="Wartość netto całej faktury"
            text={`${invoice.netValueOfTheEntireInvoice.toFixed(2)} zł`}
          />
          <DataField
            description="Wartość podatku całej faktury"
            text={`${invoice.tax.toFixed(2)} zł`}
          />
          <DataField
            description="Wartość brutto całej faktury"
            text={`${invoice.grossValueOfEntireInvoice.toFixed(2)} zł`}
          />
          <DataField
            description="Metoda płatności"
            text={invoice.methodOfPayment}
          />
          <DataField description="Termin płatności" text={invoice.dueDate} />
          <DataField
            description="Osoba wystawiająca fakturę"
            text={invoice.personCreatingInvoice}
          />
          <DataField
            description="Miejscowość wystawienia faktury"
            text={invoice.place}
          />
          <DataField description="Numer konta" text={invoice.accountNumber} />
          <br />
          <br />
          <h2 className="field-description-text">Produkty i usługi</h2>
          {items.map((item) => (
            <OneProductOnInvoice
              oneItemInfo={item}
              key={item.id}
              updateData={getInvoiceData}
            />
          ))}
          <ConfirmBtn
            text="Zatwierdź i przejdź do strony głównej"
            to="/main"
          ></ConfirmBtn>
          <ConfirmBtn
            text="Przejdź do listy faktur"
            to="/invoices-list"
          ></ConfirmBtn>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};
