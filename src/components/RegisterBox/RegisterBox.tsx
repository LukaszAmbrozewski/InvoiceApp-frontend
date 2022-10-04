import React, {useState} from 'react';
import { Field, Form, Formik } from "formik";
import {schemaRegister} from "../../Validations/UserValidation";
import {useNavigate} from 'react-router-dom';
import {StyledTextField} from "../../common/StyledTextField/StyledTextField";
import {ShowPasswordBtn} from "../../common/ShowPasswordBtn/ShowPasswordBtn";
import {MainBtn} from "../../common/MainBtn/MainBtn";
import {apiUrl} from "../../config/api";
import './RegisterBox.css'
import '../ComponentsStyles.css'

const initialValues = {
    email: "",
    password: "",
    checkPassword: "",
};

interface FormValues {
    email: string,
    password: string,
    checkPassword: string,
}

export const RegisterBox = () => {
    const [typePassword, setTypePassword] = useState<string>('password');
    const [typeCheckPassword, setTypeCheckPassword] = useState<string>('password');
    let navigate = useNavigate();

    const changeVisibilityPassword = () => {
        setTypePassword((typePassword === 'password') ? 'string' : 'password')
    }

    const changeVisibilityCheckPassword = () => {
        setTypeCheckPassword((typeCheckPassword === 'password') ? 'string' : 'password')
    }

    const register = async (values: FormValues) => {
        console.log(values)
        const res = await fetch(`${apiUrl}/user/register`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                email: values.email,
                pwd: values.password,
            }),
        });

        const data = await res.json();
        if(data.id){
            navigate('/user-added')
        } else if (data.error === "Email is already exists!"){
            navigate('/user-add-failed')
        } else {
            navigate('/error')
        }
    }

    return (
        <div className="MaterialForm">
            <Formik
                initialValues={initialValues}
                validationSchema={schemaRegister}
                onSubmit={(values, formikHelpers) => {
                    register(values);
                    formikHelpers.resetForm();
                }}
            >
                {({ errors, touched }) => (
                    <Form className="reg-box">
                        <p className="reg-text">Email</p>
                        <Field
                            name="email"
                            type="email"
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj swój adres email"
                            error={Boolean(errors.email) && Boolean(touched.email)}
                            helperText={Boolean(touched.email) && errors.email}
                        />

                        <p className="reg-text">Hasło</p>
                        <Field
                            name="password"
                            type={typePassword}
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj swoje nowe hasło"
                            error={Boolean(errors.password) && Boolean(touched.password)}
                            helperText={Boolean(touched.password) && errors.password}
                        />
                        <ShowPasswordBtn onClick={changeVisibilityPassword}/>

                        <p className="reg-text">Powtórz hasło</p>
                        <Field
                            name="checkPassword"
                            type={typeCheckPassword}
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Wpisz ponownie swoje hasło"
                            error={Boolean(errors.checkPassword) && Boolean(touched.checkPassword)}
                            helperText={Boolean(touched.checkPassword) && errors.checkPassword}
                        />
                        <ShowPasswordBtn onClick={changeVisibilityCheckPassword}/>
                        <MainBtn text="Zarejestruj" type='submit'/>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
