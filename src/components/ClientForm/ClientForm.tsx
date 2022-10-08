import React from 'react';
import {Field, Form, Formik} from "formik";
import {StyledTextField} from "../../common/StyledTextField/StyledTextField";
import {schemaAddClient} from "../../Validations/ClientValidation";
import {ConfirmBtn} from "../../common/ConfirmBtn/ConfirmBtn";
import {Client} from "types";
import '../ComponentsStyles.css'

interface Props{
    addClient: (values: Client) => void,
    initialValues: Client,
    buttonText: string,
}

export const ClientForm = (props: Props) => {
    return (
            <Formik
                initialValues={props.initialValues}
                validationSchema={schemaAddClient}
                onSubmit={(values) => {
                    props.addClient(values);
                }}
            >
                {({errors, touched}) => (
                    <Form className='form-box'>
                        <p className="login-text">Nazwa firmy</p>
                        <Field
                            name="companyName"
                            type="string"
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj nazwę firmy"
                            error={Boolean(errors.companyName) && Boolean(touched.companyName)}
                            helperText={Boolean(touched.companyName) && errors.companyName}
                        />
                        <p className="login-text">Ulica i numer</p>
                        <Field
                            name="streetAddress"
                            type="string"
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj nazwę ulicy i numer"
                            error={Boolean(errors.streetAddress) && Boolean(touched.streetAddress)}
                            helperText={Boolean(touched.streetAddress) && errors.streetAddress}
                        />
                        <p className="login-text">Kod pocztowy i miasto</p>
                        <Field
                            name="cityAndCode"
                            type="string"
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj kod pocztowy i miasto"
                            error={Boolean(errors.cityAndCode) && Boolean(touched.cityAndCode)}
                            helperText={Boolean(touched.cityAndCode) && errors.cityAndCode}
                        />
                        <p className="login-text">Numer NIP</p>
                        <Field
                            name="nip"
                            type="number"
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj numer NIP"
                            error={Boolean(errors.nip) && Boolean(touched.nip)}
                            helperText={Boolean(touched.nip) && errors.nip}
                        />
                        <p className="login-text">Numer REGON</p>
                        <Field
                            name="regon"
                            type="number"
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj numer REGON"
                            error={Boolean(errors.regon) && Boolean(touched.regon)}
                            helperText={Boolean(touched.regon) && errors.regon}
                        />
                        <p className="login-text">Email</p>
                        <Field
                            name="email"
                            type="string"
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj adres email"
                            error={Boolean(errors.email) && Boolean(touched.email)}
                            helperText={Boolean(touched.email) && errors.email}
                        />
                        <p className="login-text">Numer telefonu</p>
                        <Field
                            name="phoneNumber"
                            type="number"
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj numer telefonu"
                            error={Boolean(errors.phoneNumber) && Boolean(touched.phoneNumber)}
                            helperText={Boolean(touched.phoneNumber) && errors.phoneNumber}
                        />
                        <ConfirmBtn text={props.buttonText} type='submit'/>
                    </Form>
                )}
            </Formik>

    )
}