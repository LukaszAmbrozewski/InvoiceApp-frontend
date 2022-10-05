import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";
import {schemaLogin} from "../../Validations/UserValidation";
import {useNavigate} from 'react-router-dom';
import {StyledTextField} from "../../common/StyledTextField/StyledTextField";
import {ShowPasswordBtn} from "../../common/ShowPasswordBtn/ShowPasswordBtn";
import {MainBtn} from "../../common/MainBtn/MainBtn";
import {apiUrl} from "../../config/api";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import './LoginBox.css'
import '../ComponentsStyles.css'

const initialValues = {
    email: "",
    password: "",
};

interface FormValues {
    email: string,
    password: string,
}

export const LoginBox = () => {
    const [typePassword, setTypePassword] = useState<string>('password');
    const [loginFailed, setLoginFailed] = useState<boolean>(false);
    let navigate = useNavigate();

    const changeVisibilityPassword = () => {
        setTypePassword((typePassword === 'password') ? 'string' : 'password')
    }

    const login = async (values: FormValues) => {
        const res = await fetch(`${apiUrl}/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: values.email,
                pwd: values.password,
            }),
        });

        const data = await res.json();
        (data.ok) ? navigate('/main') : setLoginFailed(true)
    }

    return (
        <div className="auth-box">
            <Formik
                initialValues={initialValues}
                validationSchema={schemaLogin}
                onSubmit={(values) => {
                    login(values);
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <p className="login-text">Email</p>
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

                        <p className="login-text">Hasło</p>
                        <Field
                            name="password"
                            type={typePassword}
                            as={StyledTextField}
                            variant="filled"
                            className="field-box"
                            size="small"
                            label="Podaj swoje hasło"
                            error={Boolean(errors.password) && Boolean(touched.password)}
                            helperText={Boolean(touched.password) && errors.password}
                        />
                        <ShowPasswordBtn onClick={changeVisibilityPassword}/>
                        <MainBtn text="Zaloguj" type='submit'/>
                    </Form>
                )}
            </Formik>
            {loginFailed ? (
            <div className='login-failed-info'>
                <ErrorOutlineIcon className='login-failed-icon'/>
                <p>Podano nieprawidłowy email lub hasło. Spróbuj ponownie.</p>
            </div>
            ) : null}
            <hr className='login-line'/>
            <p className='login-text-bottom'>Nie posiadasz jeszcze konta?</p>
            <MainBtn text="Zarejestruj się" to='/register'/>
        </div>
    );
};
