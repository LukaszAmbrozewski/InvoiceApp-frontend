import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { StyledTextField } from "../../common/StyledTextField/StyledTextField";
import { ConfirmBtn } from "../../common/ConfirmBtn/ConfirmBtn";
import { InvoiceAdd } from "types";
import "../ComponentsStyles.css";
import { schemaAddInvoice } from "../../Validations/InvoiceValidation";
import { apiUrl } from "../../config/api";
import { useNavigate } from "react-router-dom";
import "./InvoiceAddForm.css";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { getDate } from "../../utils/getDate";

interface Props {
  buttonText: string;
  clientId: string;
}

const initialValues = {
  place: "",
  creationDate: getDate(),
  dateOfService: getDate(),
  personCreatingInvoice: "",
};

export const InvoiceAddFrom = (props: Props) => {
  const [clientAlert, setClientAlert] = useState<boolean>(false);
  const navigate = useNavigate();

  const addInvoice = async (values: InvoiceAdd) => {
    if (props.clientId === "") {
      setClientAlert(true);
    } else {
      const res = await fetch(`${apiUrl}/invoices`, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: props.clientId,
          creationDate: values.creationDate,
          dateOfService: values.dateOfService,
          place: values.place,
          personCreatingInvoice: values.personCreatingInvoice,
        }),
      });

      const response = await res.json();
      response.isSuccess
        ? navigate(`/invoice-payment/${response.id}`)
        : navigate("/error");
    }
  };

  return (
    <>
      {clientAlert ? (
        <div className="clientAlertText">
          <ErrorOutlineIcon />
          <p>Wybierz klienta z listy</p>
        </div>
      ) : null}
      <Formik
        initialValues={initialValues}
        validationSchema={schemaAddInvoice}
        onSubmit={(values) => {
          addInvoice(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-box">
            <p className="field-description-text">Miejsce wystawienia</p>
            <Field
              name="place"
              type="string"
              as={StyledTextField}
              variant="filled"
              className="field-box"
              size="small"
              label="Podaj miejscowość wystawienia faktury"
              error={Boolean(errors.place) && Boolean(touched.place)}
              helperText={Boolean(touched.place) && errors.place}
            />
            <p className="field-description-text">Data wystawienie</p>
            <Field
              name="creationDate"
              type="date"
              as={StyledTextField}
              variant="filled"
              className="field-box"
              size="small"
              label="Podaj datę wystawienia faktury"
              error={
                Boolean(errors.creationDate) && Boolean(touched.creationDate)
              }
              helperText={Boolean(touched.creationDate) && errors.creationDate}
            />
            <p className="field-description-text">Data wykonania usługi</p>
            <Field
              name="dateOfService"
              type="date"
              as={StyledTextField}
              variant="filled"
              className="field-box"
              size="small"
              label="Podaj datę wykonania usługi"
              error={
                Boolean(errors.dateOfService) && Boolean(touched.dateOfService)
              }
              helperText={
                Boolean(touched.dateOfService) && errors.dateOfService
              }
            />
            <p className="field-description-text">Osoba wystawiająca fakturę</p>
            <Field
              name="personCreatingInvoice"
              type="string"
              as={StyledTextField}
              variant="filled"
              className="field-box"
              size="small"
              label="Podaj imię i nazwisko"
              error={
                Boolean(errors.personCreatingInvoice) &&
                Boolean(touched.personCreatingInvoice)
              }
              helperText={
                Boolean(touched.personCreatingInvoice) &&
                errors.personCreatingInvoice
              }
            />
            <ConfirmBtn text={props.buttonText} type="submit" />
          </Form>
        )}
      </Formik>
    </>
  );
};
