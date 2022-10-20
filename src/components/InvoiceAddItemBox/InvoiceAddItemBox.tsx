import React from 'react';
import {isMobile} from "react-device-detect";
import {Field, Form, Formik} from "formik";
import {schemaAddInvoice} from "../../Validations/InvoiceValidation";
import {StyledTextField} from "../../common/StyledTextField/StyledTextField";
import {ConfirmBtn} from "../../common/ConfirmBtn/ConfirmBtn";
import {apiUrl} from "../../config/api";
import {AddItem} from "types";
import {useNavigate, useParams} from "react-router-dom";
import {schemaAddItem} from "../../Validations/ItemValidation";

const initialValues = {
    name: "",
    netValue: 0,
    quantity: 1,
    taxRate: 23,
};

export const InvoiceAddItemBox = () => {
    const navigate = useNavigate();
    let param = useParams();

    const addItem = async (values: AddItem) => {
        const res = await fetch(`${apiUrl}/items`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                invoiceId: param.invoiceId,
                name: values.name,
                quantity: values.quantity,
                netValue: values.netValue,
                taxRate: values.taxRate,
            }),
        });

        const response = await res.json();
        response.isSuccess ? navigate(`/invoice-added-item/${param.invoiceId}`) : navigate('/error');
    }

    return (
        <div className={isMobile ? 'data-box-mobile' : 'data-box'}>
            <Formik
                initialValues={initialValues}
                validationSchema={schemaAddItem}
                onSubmit={(values) => {
                    addItem(values)
                }}
            >
                {({errors, touched}) => (
                    <Form className='form-box'>
                        <p className="field-description-text">Nazwa towaru lub usługi</p>
                        <Field
                            name="name"
                            type="string"
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj nazwę towaru lub usługi"
                            error={Boolean(errors.name) && Boolean(touched.name)}
                            helperText={Boolean(touched.name) && errors.name}
                        />
                        <p className="field-description-text">Cena netto</p>
                        <Field
                            name="netValue"
                            type="number"
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj cenę netto za sztukę"
                            error={Boolean(errors.netValue) && Boolean(touched.netValue)}
                            helperText={Boolean(touched.netValue) && errors.netValue}
                        />
                        <p className="field-description-text">Ilość</p>
                        <Field
                            name="quantity"
                            type="number"
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj ilość"
                            error={Boolean(errors.quantity) && Boolean(touched.quantity)}
                            helperText={Boolean(touched.quantity) && errors.quantity}
                        />
                        <p className="field-description-text">Stawka podatku VAT</p>
                        <Field
                            name="taxRate"
                            type="number"
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj stawkę podatku VAT"
                            error={Boolean(errors.taxRate) && Boolean(touched.taxRate)}
                            helperText={Boolean(touched.taxRate) && errors.taxRate}
                        />
                        <ConfirmBtn text='Zapisz pozycję' type='submit'/>
                    </Form>
                )}
            </Formik>
        </div>
    )
}