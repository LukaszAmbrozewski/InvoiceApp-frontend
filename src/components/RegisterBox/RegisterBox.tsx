import React, {useState} from "react";
import {StyledTextField} from "../../common/StyledTextField/StyledTextField";
import './RegisterBox.css'
import '../ComponentsStyles.css'
import VisibilityIcon from '@mui/icons-material/Visibility';


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
            <p>
                <StyledTextField
                    id="email"
                    label="Wpisz email"
                    variant="filled"
                    className="field-box"
                    size="small"
                />
            </p>
            <p className="reg-text">Hasło</p>
            <p>
                <StyledTextField
                    id="password"
                    label="Wpisz hasło"
                    variant="filled"
                    className="field-box"
                    size="small"
                    type={typePassword}
                    autoComplete="off"
                />
            </p>
            <p className="field-box, visibility-btn-box">
                <button className="visibility-btn" type="button" onClick={changeVisibilityPassword}>
                    <VisibilityIcon/>
                </button>
            </p>
            <p className="reg-text">Powtórz hasło</p>
            <p>
                <StyledTextField
                    id="check-password"
                    label="Wpisz ponownie hasło"
                    variant="filled"
                    className="field-box"
                    size="small"
                    type={typeCheckPassword}
                    autoComplete="off"
                />
            </p>
            <p className="field-box, visibility-btn-box">
                <button className="visibility-btn" type="button" onClick={changeVisibilityCheckPassword}>
                    <VisibilityIcon/>
                </button>
            </p>
        </form>
    )
}