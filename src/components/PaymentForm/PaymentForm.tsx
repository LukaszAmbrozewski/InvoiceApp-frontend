import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { StyledTextField } from "../../common/StyledTextField/StyledTextField";
import { ConfirmBtn } from "../../common/ConfirmBtn/ConfirmBtn";
import { InvoicePayment } from "types";
import "../ComponentsStyles.css";
import { schemaAddPayment } from "../../Validations/InvoiceValidation";
import { apiUrl } from "../../config/api";
import { useNavigate, useParams } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { getDate } from "../../utils/getDate";

interface Props {
  buttonText: string;
  paymentMethod: string;
}

const initialValues = {
  dueDate: getDate(),
  accountNumber: "",
};

export const PaymentForm = (props: Props) => {
  const [methodPaymentAlert, setMethodPaymentAlert] = useState<boolean>(false);
  const navigate = useNavigate();
  let param = useParams();

  const addPayment = async (values: InvoicePayment) => {
    if (props.paymentMethod === "") {
      setMethodPaymentAlert(true);
    } else {
      const res = await fetch(`${apiUrl}/invoices`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: param.invoiceId,
          methodOfPayment: props.paymentMethod,
          dueDate: values.dueDate,
          accountNumber: values.accountNumber,
        }),
      });

      const response = await res.json();
      response.isSuccess
        ? navigate(`/invoice-add-item/${param.invoiceId}`)
        : navigate("/error");
    }
  };

  return (
    <>
      {methodPaymentAlert ? (
        <div className="clientAlertText">
          <ErrorOutlineIcon />
          <p>Wybierz sposób płatności</p>
        </div>
      ) : null}
      <Formik
        initialValues={initialValues}
        validationSchema={schemaAddPayment}
        onSubmit={(values) => {
          addPayment(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-box">
            <p className="field-description-text">Termin płatności</p>
            <Field
              name="dueDate"
              type="date"
              as={StyledTextField}
              variant="filled"
              className="field-box"
              size="small"
              label="Podaj termin płatności"
              error={Boolean(errors.dueDate) && Boolean(touched.dueDate)}
              helperText={Boolean(touched.dueDate) && errors.dueDate}
            />
            <p className="field-description-text">Numer konta</p>
            <Field
              name="accountNumber"
              type="string"
              as={StyledTextField}
              variant="filled"
              className="field-box"
              size="small"
              label="Podaj numer konta"
              error={
                Boolean(errors.accountNumber) && Boolean(touched.accountNumber)
              }
              helperText={
                Boolean(touched.accountNumber) && errors.accountNumber
              }
            />
            <ConfirmBtn text={props.buttonText} type="submit" />
          </Form>
        )}
      </Formik>
    </>
  );
};
