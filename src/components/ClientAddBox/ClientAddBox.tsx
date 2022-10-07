import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";
import {StyledTextField} from "../../common/StyledTextField/StyledTextField";
import {useNavigate} from 'react-router-dom';
import {Client} from "types";
import { isMobile } from 'react-device-detect';
import {MainBtn} from "../../common/MainBtn/MainBtn";
import {schemaAddClient} from "../../Validations/ClientValidation";
import {apiUrl} from "../../config/api";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import './ClientAddBox.css'
import '../ComponentsStyles.css'


const initialValues = {
    id: "",
    userId: "",
    companyName: "",
    streetAddress: "",
    cityAndCode: "",
    nip: null,
    regon: null,
    phoneNumber: null,
    email: "",
};

export const ClientAddBox = () => {
    const [addedError, setAddedError] = useState<boolean>(false);
    const navigate = useNavigate();
    const addClient = async (values: Client) => {
        const res = await fetch(`${apiUrl}/clients`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
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

        const data = await res.json();
        if(data.isSuccess){
            navigate('/client-added')
        } else if(data.error === "Client is already exist!"){
            setAddedError(true)
        } else {
            navigate('/error')
        }

    }

    return(
        <div className={isMobile ? 'data-box-mobile' : 'data-box'}>
            {addedError ?
                (<div className="client-add-failed">
                    <ErrorOutlineIcon className='client-add-failed-icon'/>
                    <p>Użytkownik o podanym numerze NIP istnieje już w Twojej bazie klientów.</p>
                </div>)
                : null
            }
            <Formik
                initialValues={initialValues}
                validationSchema={schemaAddClient}
                onSubmit={(values) => {
                    addClient(values);
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
                        <div className='form-confirm-button'>
                            <MainBtn text="Dodaj" type='submit'/>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}