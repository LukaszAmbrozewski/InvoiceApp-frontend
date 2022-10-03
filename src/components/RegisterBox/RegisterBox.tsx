import React, {useState} from "react";
import {StyledTextField} from "../../common/StyledTextField/StyledTextField";
import {MainBtn} from "../../common/MainBtn/MainBtn";
import {ShowPasswordBtn} from "../../common/ShowPasswordBtn/ShowPasswordBtn";
import './RegisterBox.css'
import '../ComponentsStyles.css'


export const RegisterBox = () => {
    const [typePassword, setTypePassword] = useState<string>('password');
    const [typeCheckPassword, setTypeCheckPassword] = useState<string>('password');


    const changeVisibilityPassword = () => {
        setTypePassword ((typePassword === 'password') ? 'string' : 'password')
    }

    const changeVisibilityCheckPassword = () => {
        setTypeCheckPassword ((typeCheckPassword === 'password') ? 'string' : 'password')
    }

    const register = async () => {}

    return (
        <form className="reg-box" onSubmit={register}>
            <p className="reg-text">Email</p>
                <StyledTextField
                    id="email"
                    label="Wpisz email"
                    variant="filled"
                    className="field-box"
                    size="small"
                />
            <p className="reg-text">Hasło</p>
                <StyledTextField
                    id="password"
                    label="Wpisz hasło"
                    variant="filled"
                    className="field-box"
                    size="small"
                    type={typePassword}
                />
            <ShowPasswordBtn onClick={changeVisibilityPassword}/>
            <p className="reg-text">Powtórz hasło</p>
                <StyledTextField
                    id="check-password"
                    label="Wpisz ponownie hasło"
                    variant="filled"
                    className="field-box"
                    size="small"
                    type={typeCheckPassword}
                />
            <ShowPasswordBtn onClick={changeVisibilityCheckPassword}/>
            <MainBtn text="Zarejestruj"/>
        </form>
    )
}