import React from 'react';
import {Field, Form, Formik} from "formik";
import {StyledTextField} from "../../common/StyledTextField/StyledTextField";
import {schemaAddClient} from "../../Validations/ClientValidation";
import {ConfirmBtn} from "../../common/ConfirmBtn/ConfirmBtn";
import {UserData} from "types";
import '../ComponentsStyles.css'

interface Props{
    sendForm: (values: UserData) => void,
    initialValues: UserData,
    buttonText: string,
}

export const UserForm = (props: Props) => {
    return (
        <Formik
            initialValues={props.initialValues}
            validationSchema={schemaAddClient}
            onSubmit={(values) => {
                props.sendForm(values);
            }}
        >
            {({errors, touched}) => (
                <Form className='form-box'>
                    <p className="field-description-text">Nazwa firmy</p>
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
                    <p className="field-description-text">Ulica i numer</p>
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
                    <p className="field-description-text">Kod pocztowy i miasto</p>
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
                    <p className="field-description-text">Numer NIP</p>
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
                    <p className="field-description-text">Numer REGON</p>
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
                    <p className="field-description-text">Numer telefonu</p>
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